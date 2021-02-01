import { useState } from 'react'

export default function Bubble() {
    const [isClicked, setClicked] = useState(false)
    const clickHandler = () => {
        setClicked(!isClicked)
    }
    const button_base = "focus:outline-none border border-transparent px-4 py-4 rounded-full"
    const button_props = {
        className: isClicked ? `${button_base} bg-blue-100` : `${button_base} bg-blue-300`
    }

    return (
        <div className="px-1 py-1">
            <button
                type="button"
                {...button_props}
                onClick={clickHandler}
            >
            </button>
        </div >
    )
}