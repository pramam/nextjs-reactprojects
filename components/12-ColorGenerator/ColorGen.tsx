import { useState, useEffect } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

// Uses https://github.com/noeldelgado/values.js
export default function ColorGen() {
    const [color, setColor] = useState('#86eb21') // set to #hex color
    const [list, setList] = useState([]) // list of all colors
    const [error, setError] = useState(false) // set when the library throws an error

    // populate with default color
    useEffect(() => {
        try {
            let newcolor = new Values(color)
            console.log("Got initial default values")
            setList(newcolor.all())
            console.log("Inital setList successfully")
            setError(false)
        } catch (error) {
            setError(true)
            console.log(`First render Error: ${error.message}`)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let newcolor = new Values(color)
            console.log("Got values")
            setList(newcolor.all())
            console.log("setList successfully")
            setError(false)
        } catch (error) {
            setError(true)
            console.log(`Error: ${error.message}`)
        }
    }
    return (
        <div className="flex flex-col">
            <div className="mt-8 ml-6">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row">
                        <label htmlFor="color"
                            className="mt-4 sm:mt-2 text-xl sm:text-2xl lg:text-3xl font-bold mr-5 tracking-wide">
                            Color Generator
                        </label>
                        <div className="flex flex-col sm:flex-row">
                            <input
                                type="text"
                                name="color"
                                id="color"
                                placeholder="#f15025"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className={`w-40 sm:w-52 rounded-md ${error ? `border border-red-500` : ``}`}
                            >
                            </input>
                            <button
                                type='submit'
                                className="text-white bg-gradient-to-r from-green-400 to-blue-500 tracking-wide font-medium sm:ml-4 mt-2 sm:mt-0 px-1 sm:px-7 rounded-md focus:outline-line"
                            >Submit </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mt-7">
                <div className="grid grid-cols-3 lg:grid-cols-4 grid-flow-row gap-0">
                {list.map((obj, index) => {
                    return (<div key={index}>
                        <SingleColor
                            hex={obj.hexString()}
                            weight={obj.weight}
                            index={index}
                        />
                    </div>)
                })}
                </div>
            </div>
            <p className="mt-2 text-center"> Click on tile to copy color to Clipboard</p>
        </div>
    )
}