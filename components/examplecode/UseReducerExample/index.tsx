import { useState, useEffect } from 'react'
import Modal from './Modal'

export default function Index() {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const timeout_id = setTimeout(() => {
            setMessage('')
        }, 3000)
        return (() => clearTimeout(timeout_id))
    }, [message])
    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            setShowModal(true)
            setPeople((oldPeople) => {
                return ([...oldPeople, { id: new Date().getTime().toString(), name }])
            })
            setMessage("Item Added")
            setName('')
            console.log(`After setting people: ${people}`)
        }
        else {
            setShowModal(true)
            setMessage("Please enter value")
        }
    }
    return (
        <div className="mt-6 mb-6 flex justify-center mx-auto shadow-lg max-w-2xl">
            <div className="flex flex-col">
                {showModal && <Modal message={message} />}
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
                {/* <p className="text-xl text-center"> </p> */}
                {people.map((obj, index) => (
                    <p key={obj.id} className="text-center"> {obj.name}</p>
                ))}
            </div>
        </div>
    )
}