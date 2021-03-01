import { useState } from 'react'

export default function GroceryList() {
    const [groceryitem, setGroceryItem] = useState('')

    return (
        <div className="flex justify-center">
            <div className="w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-20 shadow-lg bg-gray-50 rounded-md">
                <h1 className="mt-2 lg:mt-10 flex justify-center mx-auto w-full text-2xl font-semibold ">Grocery List</h1>
                <form className="mt-2 lg:mt-4">
                    <div className="flex justify-center">
                        <div className="flex flex-row">
                            <label htmlFor="entry">
                            </label>
                            <input type="text"
                                className="w-40 sm:w-52 lg:w-72 sm:mx-2 lg:mx-5 rounded-md bg-gray-200 border border-transparent focus:ring-yellow-600 focus:border-yellow-600"
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
            </div>
        </div>
    )
}