import { useState, useEffect } from 'react'

// SingleColor needed to be moved to its own component to be able to
// display Copied to clipboard on a single color.
export default function SingleColor({ hex, weight, index }) {
    const [alert, setAlert] = useState(false)
    const bgColor = { backgroundColor: hex }
    const common_props = "h-20 w-20 sm:h-32 sm:w-32"

    // clear the "Copied to Clipboard" message after 3 seconds
    useEffect(() => {
        const timer_id = setTimeout(() => { setAlert(false) }, 3000)
        return (() => clearTimeout(timer_id))
    }, [alert])

    return (
        <div
            key={index}
            className={`${common_props} ${index > 9 ? `text-white` : `text-gray-900`}`}
            style={bgColor}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hex)
            }}
            onMouseLeave={() => {
                setAlert(false)
                console.log(`left ${hex} tile`)
            }}
            onMouseOut={() => {
                setAlert(false)
                console.log(`onMouseOut ${hex} tile`)
            }}
        >
            <h3 className="ml-3">{weight}%</h3>
            <h3 className="ml-3">{hex} </h3>
            { alert && <h4 className="ml-3 uppercase text-sm text-indigo-500">Copied to clipboard</h4>}
        </div>
    )
}