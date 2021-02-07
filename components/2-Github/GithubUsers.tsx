import { useState, useEffect } from 'react'

const url = "https://api.github.com/users"
// Display github users like cards
export default function GithubUsers() {
    const [users, setUsers] = useState([]);

    const clickHandler = () => console.log('clicked')

    const getUsers = async () => {
        const response = await fetch(url);
        const gotusers = await response.json();

        console.log('hello')
        setUsers(gotusers);
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
                    return (
                        <li className="bg-gray-50 col-span-1 flex shadow-md rounded-xl"
                            key={index}>
                            <div className="flex flex-row ">
                                {/* <img className="w-16 h-16 sm:h-auto sm:rounded-none" */}
                                {/* The below is what gave me the rounded corners on the L side of the image */}
                                <img className="flex rounded-md w-16 h-16 justify-center items-center"
                                    src={obj.avatar_url}
                                    alt="photo" />
                                <h2 className="ml-4 mt-2 text-sm font-medium hover:text-gray-600 text-gray-900">{obj.login}</h2>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* <button type="button" onClick={clickHandler}>click me</button> */}
        </div>
    )
}