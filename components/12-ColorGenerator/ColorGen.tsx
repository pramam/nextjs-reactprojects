import { useState } from 'react'

// Uses https://github.com/noeldelgado/values.js
export default function ColorGen() {
    const [color, setColor] = useState("#f15025")
    return (
        <div className="flex flex-col">
            <div className="mt-8 ml-6">
                <form>
                    <div className="flex flex-row">
                        <label htmlFor="color"
                            className="md:text-2xl lg:text-3xl font-bold mr-5 tracking-wide">
                            Color Generator
                        </label>
                        <div className="flex flex-col sm:flex-row">
                            <input
                                type="text"
                                name="color"
                                id="color"
                                value={color}
                                className="w-52 rounded-md"
                            >
                            </input>
                            <button
                                type='submit'
                                className="text-white bg-gradient-to-r from-green-400 to-blue-500 tracking-wide font-medium ml-4 px-7 rounded-md focus:outline-line"
                            >Submit </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}