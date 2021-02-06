import { useState, useEffect } from 'react'
// by default runs after every rerender
// 2nd parameter: array of dependencies
// if dependency list is empty, it only runs on the initial render

export default function UseEffectExample1() {
    const [counter, setCounter] = useState(0);
    // every time we change [counter], we re-run useEffect
    // Without counter, it runs on every rerender
    useEffect(() => {
        console.log('useEffect after every re-render')
    }, [counter])

    const incrementHandler = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    console.log('main body')
    return (
        <div className="mt-5 flex justify-center shadow-lg max-w-xs mx-auto">
            <div className="flex flex-col justify-center mt-5">
                <div className="mt-5 flex flex-col justify-center">
                    <h2 className="flex justify-center">useEffect Example</h2>
                    <h3 className="flex justify-center">{counter}</h3>
                    <button
                        type="button"
                        className="mt-5 mb-5 text-base rounded-md text-sm bg-pink-400 text-white focus:outline-none border border-transparent"
                        onClick={incrementHandler}
                    >
                        Increment
            </button>
                </div>
            </div>
        </div>
    )
}