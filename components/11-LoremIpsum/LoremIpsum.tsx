import { useState } from 'react'
import loremipsumdata from './loremipsumdata.json'

// Data obtained from: https://hipsum.co/?paras=8&type=hipster-latin
export default function LoremIpsum() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="text-center uppercase text-2xl mt-10 lg:text-3xl lg:mt-16">Tired of boring Lorem Ipsum?</h1>
                <div className="mt-7">
                    <div className="flex flex-row justify-center">
                        <label htmlFor="paragraphs"
                            className="text-2xl mr-3 align-baseline mt-2"> Paragraphs: </label>
                        <form className="">
                            <input
                                type='number'
                                id='count'
                                name='count'
                                value={count}
                                onChange={(e) => setCount(e.target.valueAsNumber)}
                                className="w-16 mr-2">
                            </input>
                            <button
                                type="button"
                                className="py-1 px-2 lg:py-2 lg:px-3 lg:mx-3 bg-gray-500 text-gray-900 uppercase font-bold rounded-md border border-transparent focus:outline-none">
                                Generate
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}