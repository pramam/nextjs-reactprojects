import { useState, useEffect } from 'react'
import ObjectManipulation from '../examplecode/ObjectManipulation';
import SVGPencilAltSmall from '../svgicons/SVGPencilAltSmall';
import SVGTrashSmall from '../svgicons/SVGTrashSmall';

const localStorageID = 'local_grocery_list'

export default function GroceryList() {
    const [groceryitem, setGroceryItem] = useState('')
    // grocerylist has array of {id: '', label :''}
    const [grocerylist, setGroceryList] = useState([])
    // showAlert is set to true when we want to display an alert message on top
    // message is the message displayed
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const [editing, setEditing] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    // On initial render, get grocery list from local storage
    useEffect(() => {
        let localitems = localStorage.getItem(localStorageID)
        if (localitems)
            setGroceryList(JSON.parse(localitems))
        else
            setGroceryList([])
    }, [])

    // Everytime the list changes, save it to local storage
    useEffect(() => {
        localStorage.setItem(localStorageID, JSON.stringify(grocerylist))
    }, [grocerylist])

    useEffect(() => {
        console.log(`in useEffect`)
        const timer_id = setTimeout(() => { setShowAlert(false) }, 3000)
        return (() => clearTimeout(timer_id))
    }, [showAlert])

    const submitHandler = (e) => {
        e.preventDefault();
        if (groceryitem) {
            if (!editing) {
                // if groceryitem already in list, show alert and do not add
                if (grocerylist.find(item => item.label === groceryitem.trim())) {
                    setMessage(`Item ${groceryitem} already on list`)
                    setShowAlert(true)
                    setGroceryItem('')
                }
                else {
                    const newItem = { id: new Date().getTime().toString(), label: groceryitem.trim() }
                    setGroceryList([...grocerylist, newItem])
                    setMessage(`Added ${groceryitem} to list`)
                    setShowAlert(true)
                    setGroceryItem('')
                }
            } else { // editing
                // editingItem already has item being edited from the editHandler
                // it is still on the list
                setMessage(`Edited ${editingItem.label}`)
                // When an item is edited, its 'id' does not change, so it keeps its place
                // in the list
                setGroceryList(grocerylist.map((obj) => {
                    obj.id === editingItem.id ? obj.label = groceryitem : ''
                    return obj
                }))
                setShowAlert(true)
                setEditing(false)
                setEditingItem(null)
                setGroceryItem('')
            }
        }
        else
        {
            setMessage(`Please enter a valid value`)
            setShowAlert(true)
            console.log(`empty input field`)
        }
    }
    const clearAllHandler = () => {
        setGroceryList([])
        setMessage(`Cleared all items`)
        setShowAlert(true)
    }

    const deleteHandler = (id) => {
        // get the label of the item being removed
        const removedItem = grocerylist.find(item => item.id === id)

        setGroceryList(grocerylist.filter(item => item.id != id))
        setMessage(`Removed ${removedItem.label} from list`)
        setShowAlert(true)
    }

    const editHandler = (id) => {
        const editing_item = grocerylist.find(item => item.id === id)

        setGroceryItem(editing_item.label)
        // This will change the Submit button to Edit
        setEditing(true)
        setEditingItem(editing_item)
    }

    return (
        <div className="flex justify-center">
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-20 shadow-lg bg-gray-50 rounded-md">
                {showAlert ? <h2 className="mx-1 sm:mx-5 lg:mx-20 mt-2 text-center text-gray-900 bg-gray-300">{message}</h2> : ''}
                <h1 className="mt-2 lg:mt-10 flex justify-center mx-auto w-full text-2xl font-semibold ">Grocery List</h1>
                <form className="mt-2 lg:mt-4" onSubmit={submitHandler}>
                    <div className="flex justify-center">
                        <div className="flex flex-row">
                            <label htmlFor="entry">
                            </label>
                            <input type="text"
                                className="w-40 sm:w-52 lg:w-96 sm:mx-2 lg:mx-5 rounded-md bg-gray-200 border border-transparent focus:ring-yellow-600 focus:border-yellow-600"
                                placeholder="eg. Eggs"
                                id="entry"
                                name="entry"
                                value={groceryitem}
                                onChange={(e) => setGroceryItem(e.target.value)}
                            ></input>
                            <button
                                type="submit"
                                className="px-5 bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-500 rounded-md focus:outline-none border border:transparent text-gray-50"
                            >{editing ? 'Edit' : 'Submit'}</button>
                        </div>
                    </div>
                </form>
                <div className="mt-4 w-3/5 sm:w-3/5 lg:w-3/5 mx-auto">
                    <ul className="flex flex-col justify-center">
                        {grocerylist.map((obj, index) => {
                            return (
                                <li key={index} className="text-gray-900 mb-3">
                                    <div className="flex flex-row justify-between">
                                        <p className="">{obj.label}</p>
                                        <div className="flex flex-row">
                                            <button
                                                className="focus:outline-none"
                                                onClick={() => editHandler(obj.id)}
                                            >
                                                <SVGPencilAltSmall css="h-5 w-5 text-green-600" />
                                            </button>
                                            <button
                                                className="focus:outline-none"
                                                onClick={() => deleteHandler(obj.id)}>
                                                <SVGTrashSmall css="h-5 w-5 text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    {grocerylist.length > 0 ?
                        <button className="flex justify-center mx-auto mb-5 text-yellow-700"
                            type="button"
                            onClick={clearAllHandler}
                        >Clear All Items</button>
                        : ''}
                </div>  
            </div>
        </div>
    )
}