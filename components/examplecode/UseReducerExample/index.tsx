import { useState } from 'react'

export default function Index() {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([])
    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            setPeople((oldPeople) => {
                return ([...oldPeople, name])
            })
            setName('')
            console.log(`After setting people: ${people}`)
        }
    }
    return (
        <div className="mt-6 mb-6 flex justify-center mx-auto shadow-lg max-w-2xl">
            <div className="flex flex-col">
                <form onSubmit={submitHandler} className="mb-4">
                    <h1 className="mt-1 mb-4 text-xl text-center"> useReducer Example</h1>
                    <input type="text"
                        className="bg-gray-100 rounded-md border border-transparent"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                    <button type="submit"
                        className="ml-2 p-2 bg-indigo-500 text-white rounded-md focus:outline-none">
                        Add Person</button>
                </form>
                <p className="text-xl text-center"> People: {people.length}</p>
                {people.map((obj, index) => (
                    <p key={index}> {obj}</p>
                ))}
            </div>
        </div>
    )
}