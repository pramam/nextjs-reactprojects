import { useEffect, useRef } from 'react'

// preserves value in-between renders like useState
// unlike useState, useRef DOES NOT trigger re-render
// targets DOM nodes/elements
export default function UseRefExample() {
    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)

        // can do something specific with this particular DOM node
        console.log(divContainer.current)
    }

    useEffect(() => {
        console.log(refContainer.current)
        refContainer.current.focus()
    })
    console.log(`refContainer: ${refContainer}`)
    console.log(refContainer)
    return (
        <div className="mt-6 mb-6 max-w-2xl shadow-lg flex justify-center mx-auto">
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mt-1 mb-4 text-xl text-center">UseRef Example in Form</div>
                    <div className="flex flex-row justify-center mx-auto">
                        <input type="text" ref={refContainer}
                            className="bg-gray-100 border border-transparent rounded-md">
                        </input>
                        <button type="submit"
                            className="ml-2 bg-indigo-500 p-2 rounded-md text-white focus:outline-none"
                        >Submit</button>
                    </div>
                </form>
                <div className="text-center mt-2 uppercase" ref={divContainer}>hello world</div>
            </div>
        </div>
    )
}