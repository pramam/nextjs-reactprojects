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
        <div className="flex justify-center" >
            <div className="flex flex-col mt-5">
                <div className="px-5 mb-5">
                    <h3 className="uppercase text-semibold">{person.name}</h3>
                    <h3 className="text-semibold">{person.age}</h3>
                    <h3 className="text-semibold">{person.message}</h3>
                </div>
                <button
                    type="button"
                    className="rounded-md bg-blue-300 px-4 py-2 text-white focus:outline-none border border-transparent"
                    onClick={changeHandler}
                >
                    Change Message
                </button>
            </div>
        </div>
    )
}
export default UseStateExampleObj
