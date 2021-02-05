import React, { useState } from 'react'

function UseStateExampleObj() {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        message: 'Hello Peter'
    })
    const changeHandler = () => {
        setPerson({ ...person, message: "Again" })
    }
    return (
        <div className="flex justify-center shadow-lg max-w-xs mx-auto" >
            <div className="flex flex-col mt-5">
                <div className="px-5 mb-5">
                    <h3 className="uppercase text-semibold text-md text-gray-500">{person.name}</h3>
                    <h3 className="text-semibold text-md text-gray-500">{person.age}</h3>
                    <h3 className="text-semibold text-md text-gray-500">{person.message}</h3>
                </div>
                <button
                    type="button"
                    className="mb-5 rounded-md bg-blue-300 px-4 py-2 text-white focus:outline-none border border-transparent"
                    onClick={changeHandler}
                >
                    Change Message
                </button>
            </div>
        </div>
    )
}
export default UseStateExampleObj
