import { setUncaughtExceptionCaptureCallback } from 'process';
import { useState } from 'react'
import loremipsumdata from './loremipsumdata.json'

// Data obtained from: https://hipsum.co/?paras=8&type=hipster-latin
export default function LoremIpsum() {
    const [count, setCount] = useState(0);
    const [paragraphs, setParagraphs] = useState(loremipsumdata);
    
    const [display, setDisplay] = useState([]);

    const maxcount = paragraphs.length

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("in handleSubmit")
        // setCount is asynchronous; cannot call it inside if loop.
        let amount = count;
        if (amount <= 0) {
            console.log("Setting count to 1")
            amount = 1;
        }
        if (amount > maxcount)
            amount = maxcount;
        console.log(`setting Display: [0, ${amount}]`)
        setDisplay(paragraphs.slice(0, amount))
        setCount(amount)
    }
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="text-center uppercase text-2xl mt-10 lg:text-3xl lg:mt-16">Tired of boring Lorem Ipsum?</h1>
                <div className="mt-7 mb-7 lg:mb-10">
                    <div className="flex flex-row justify-center">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="count"
                                className="text-2xl mr-3 align-baseline mt-2"> Paragraphs: </label>
                            <input
                                type='number'
                                id='count'
                                name='count'
                                value={count}
                                onChange={(e) => setCount(e.target.valueAsNumber)}
                                className="w-16 mr-2">
                            </input>
                            <button
                                type="submit"
                                className="py-1 px-2 lg:py-2 lg:px-3 lg:mx-3 bg-gray-500 hover:bg-gray-400 text-gray-900 uppercase font-bold rounded-md border border-transparent focus:outline-none"
                            >
                                Generate
                        </button>
                        </form>
                    </div>
                </div>

                {display.map((obj, index) => {
                    return (
                        <p key={index} className="max-w-xl mx-auto text-center mb-5 lg:mb-7">{obj}</p>
                    )
                })}
            </div>
        </div>
    )
}