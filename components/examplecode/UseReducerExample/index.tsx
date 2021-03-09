import { useState, useEffect, useReducer } from 'react'
import Modal from './Modal'

type State = {
    people: {
        id: number,
        name: string
    }[]
    isModalOpen: boolean
    modalContent: string
}
type Action =
    | { type: 'TESTING' }
// state right before the update, and the action
const reducer = (state: State, action: Action): State => {
    console.log(state, action)
    return {
        people: [],
        isModalOpen: true,
        modalContent: "testng"
    }
}

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello world'
}
export default function Index() {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)

    // dispatch is going to go through the reducer
    // reducer takes in old state, action and spits out a new state
    // useReducer is looking for reducer which is the function that is manipulating the state,
    // and it will happen when dipatch the action

    // const [people, setPeople] = useState([])
    // const [showModal, setShowModal] = useState(false)
    // const [message, setMessage] = useState('')

    // useEffect(() => {
    //     const timeout_id = setTimeout(() => {
    //         setMessage('')
    //     }, 3000)
    //     return (() => clearTimeout(timeout_id))
    // }, [message])
    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            // setShowModal(true)
            // setPeople((oldPeople) => {
            //     return ([...oldPeople, { id: new Date().getTime().toString(), name }])
            // })
            // setMessage("Item Added")
            // setName('')
            // console.log(`After setting people: ${people}`)

            // once you dispatch your action, you need to handle it in reducer
            dispatch({ type: "TESTING" })
        }
        else {
            // setShowModal(true)
            // setMessage("Please enter value")
        }
    }
    return (
        <div className="mt-6 mb-6 flex justify-center mx-auto shadow-lg max-w-2xl">
            <div className="flex flex-col">
                {state.isModalOpen && <Modal message={state.modalContent} />}
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
                {state.people.map((obj, index) => (
                    <p key={obj.id} className="text-center"> {obj.name}</p>
                ))}
            </div>
        </div>
    )
}