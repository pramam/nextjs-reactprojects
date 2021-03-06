import { useState } from 'react'

export default function TransitionHeightExample() {
    const [isclicked, setIsclicked] = useState(false)
    const clickHandler = () => {
        setIsclicked(!isclicked)

    }
    const common_props = "h-8 w-8 my-4 transition-all duration-700 ease-in-out bg-green-500"
    const clicked_props = "h-24 hover:bg-red-500"
    return (
        <div className="flex flex-row justify-center">
            <button type="button" onClick={clickHandler}
                className="focus:outline-none border border-transparent">
                <div className={isclicked ? `${common_props} ${clicked_props}` : common_props}>
                </div>
            </button>
        </div>
    )
}