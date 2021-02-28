import { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

// Uses https://github.com/noeldelgado/values.js
export default function ColorGen() {
    const [color, setColor] = useState('') // set to #hex color
    const [list, setList] = useState([]) // list of all colors
    const [error, setError] = useState(false) // set when the library throws an error

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

            <div className="mt-7 flex flex-row flex-wrap">
                {list.map((obj, index) => {
                    return (<div key={index}>
                        <SingleColor
                            hex={obj.hexString()}
                            weight={obj.weight}
                            index={index}
                        />
                    </div>)
                    // const bgColor = { backgroundColor: obj.hexString() }
                    // const common_props = "h-20 w-20 sm:h-32 sm:w-32"
                    // return (
                    //     // <button key={index} type="button" onClick={() => setClipboard(obj.hexString())}>
                    //         <div
                    //             key={index}
                    //             className={`${common_props} ${index > 9 ? `text-white` : `text-gray-900`}`}
                    //             style={bgColor}
                    //         onClick={() => {
                    //             setAlert(true)
                    //             // setClipboard(obj.hexString())

                    //         }}
                    //             >
                    //         {/* <h3 className="ml-3 mt-3">{Math.abs(100 - (index * 10))}%</h3> */}
                    //         <h3 className="ml-3">{obj.weight}%</h3>
                    //                 <h3 className="ml-3">{obj.hexString()} </h3>
                    //         { alert && <h4 className="ml-3 uppercase text-sm text-indigo-500">Copied to clipboard</h4>}
                    //             </div>
                    //     // </button>
                    // )
                })}
            </div>
        </div>
    )
}