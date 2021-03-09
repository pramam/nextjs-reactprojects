import { useState, useEffect, useReducer } from 'react'
import Modal from './Modal'
import SVGTrashSmall from '../../svgicons/SVGTrashSmall'

// Type checking useReducer in Typescript: https://www.benmvp.com/blog/type-checking-react-usereducer-typescript/
type State = {
    people: {
        id: string,
        name: string
    }[]
    isModalOpen: boolean
    modalContent: string
}
type Action =
    | { type: 'ADD_ITEM', payload: { id: string, name: string } }
    | { type: 'NO_VALUE' }
    | { type: 'DELETE_ITEM', payload: { id: string, name: string } }

// state right before the update, and the action
const reducer = (state: State, action: Action): State => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, people: [...state.people, action.payload], isModalOpen: true, modalContent: `Item ${action.payload.name} Added` }
        case 'NO_VALUE':
            return { ...state, isModalOpen: true, modalContent: "Please enter a value" }
        case 'DELETE_ITEM':
            const removedPerson = state.people.find(item => item.id === action.payload.id)
            const newArray = state.people.filter(item => item.id != action.payload.id)
            return { people: [...newArray], isModalOpen: true, modalContent: `Removed ${removedPerson.name}` }
        default:
            throw new Error('No matching action type')
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

    // useEffect(() => {
    //     const timeout_id = setTimeout(() => {
    //         setMessage('')
    //     }, 3000)
    //     return (() => clearTimeout(timeout_id))
    // }, [message])
    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            // once you dispatch your action, you need to handle it in reducer
            const newItem = { id: new Date().getTime().toString(), name }
            dispatch({ type: "ADD_ITEM", payload: newItem })
            setName('')
        }
        else {
            dispatch({ type: "NO_VALUE" })
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
                    <div key={obj.id} className="flex flex-row justify-between">
                        <p className="text-center"> {obj.name}</p>
                        <button className="focus:outline-none"
                            onClick={() => dispatch({ type: 'DELETE_ITEM', payload: obj })}>
                            <SVGTrashSmall css="h-4 w-4 text-red-500" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}