import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const decrementHandler = () => {
        setCounter(prevCounter => prevCounter - 1)
    }
    const incrementHandler = () => {
        setCounter(prevCounter => prevCounter + 1)
    }
    return (
        <div className="mt-5 flex justify-center shadow-lg max-w-xs mx-auto">
            <div className="mt-5 mb-5 flex flex-col justify-center">
                <h4 className="flex justify-center text-md text-gray-500 text-semibold mb-2">Counter: {counter}</h4>
                <div className="flex flex-row">
                    <button
                        type="button"
                        className="text-base px-2 py-2 mr-2 rounded-md text-sm bg-green-400 text-white focus:outline-none border border-transparent"
                        onClick={decrementHandler}
                    >
                        Decrement
                    </button>
                    <button
                        type="button"
                        className="text-base px-2 py-2 mr-2 rounded-md text-sm bg-green-400 text-white focus:outline-none border border-transparent"
                        onClick={incrementHandler}
                    >
                        Increment
                    </button>
                </div>
                <button
                    type="button"
                    className="mt-5 text-base px-2 py-2 mr-2 rounded-md text-sm bg-green-400 text-white focus:outline-none border border-transparent"
                    onClick={() => setTimeout(incrementHandler, 2000)}
                >
                    Increment in 2 seconds
                    </button>
            </div>
        </div>
    )
}