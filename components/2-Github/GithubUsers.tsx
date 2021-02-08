import { useState, useEffect } from 'react'

const url = "https://api.github.com/users"

// Display github users like cards
export default function GithubUsers() {
    const [users, setUsers] = useState([]);

    const clickHandler = () => console.log('clicked')

    const getUsers = async () => {

        const response = await fetch(url)
        const getusers = await response.json();

        // https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/
        // All threads will be concurrent, could be a memory issuse. Fix later; Have 30 users
        // for now.
        const withrepos = await Promise.all(getusers.map(async (u) => {
            const response4 = await fetch(u.repos_url);
            const getrepos4 = await response4.json();
            // console.log(`4: repos_len: ${getrepos4.length}`)
            return { ...u, repos_len: getrepos4.length }
        }))

        // console.log(JSON.stringify(withrepos))
        // console.log('hello')
        setUsers(withrepos);
    }


    useEffect(() => {
        getUsers();

    }, []) // call useEffect only on the first render

    // This does not work
    // useEffect(async () => {
    //     const response = await fetch(url)
    // }, [])

    return (
        <div className="container bg-indigo-50">
            <h1 className="p-4 flex justify-center text-gray-500 text-lg font-medium uppercase tracking-wide">Github users</h1>
            <ul className="mt-3 p-5 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {users.map((obj, index) => {
                    const repo_url = obj.html_url + "?tab=repositories";

                    return (
                        <li className="bg-gray-50 col-span-1 flex shadow-md rounded-xl"
                            key={index}>
                            <div className="flex flex-row ">
                                {/* <img className="w-16 h-16 sm:h-auto sm:rounded-none" */}
                                {/* The below is what gave me the rounded corners on the L side of the image */}
                                <img className="flex rounded-md w-16 h-16 justify-center items-center"
                                    src={obj.avatar_url}
                                    alt="photo" />
                                <div className="flex flex-col">
                                    <a href={obj.html_url} >
                                        <h2 className="ml-4 mt-2 text-sm font-medium hover:text-blue-400 text-gray-900">{obj.login}</h2>
                                    </a>
                                    <a href={repo_url}>
                                        <h4 className="ml-4 mt-2 text-xs font-medium text-gray-500 hover:text-blue-400">Repos: {obj.repos_len}</h4>
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}