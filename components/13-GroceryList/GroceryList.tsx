import { useState } from 'react'
import SVGPencilAltSmall from '../svgicons/SVGPencilAltSmall';
import SVGTrashSmall from '../svgicons/SVGTrashSmall';

export default function GroceryList() {
    const [groceryitem, setGroceryItem] = useState('')
    const [grocerylist, setGroceryList] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        if (groceryitem) {
            setGroceryList([...grocerylist, groceryitem])
            console.log(`added ${groceryitem} to list`)
        }
        else
            console.log(`empty input field`)
    }
    return (
        <div className="flex justify-center">
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-20 shadow-lg bg-gray-50 rounded-md">
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
                            >Submit</button>
                        </div>
                    </div>
                </form>
                <div className="mt-4 w-3/5 sm:w-3/5 lg:w-3/5 mx-auto">
                    <ul className="flex flex-col justify-center">
                        {grocerylist.map((obj, index) => {
                            return (
                                <li key={index} className="text-gray-900 mb-3">
                                    <div className="flex flex-row justify-between">
                                        <p className="">{obj}</p>
                                        <div className="flex flex-row">
                                            <SVGPencilAltSmall css="h-5 w-5 text-green-600" />
                                            <SVGTrashSmall css="h-5 w-5 text-red-600" />
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>  
            </div>
        </div>
    )
}