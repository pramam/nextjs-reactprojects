import { useState } from 'react'
import quoteData from './sliderdata.json'
import OneSlide from './OneSlide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Slider() {
    const [current, setCurrent] = useState(0)

    const leftArrowHandler = () => {
        current === 0 ? setCurrent(quoteData.length - 1) : setCurrent(prev => prev - 1)
        console.log(`leftArrowHandler: new current:${current}`)
    }

    const rightArrowHandler = () => {
        current === quoteData.length - 1 ?
            setCurrent(0) : setCurrent(prevCurrent => prevCurrent + 1)
        console.log(`rightArrowHandler: new current: ${current}`)
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="lg:mt-32">
                    <div className="flex flex-row items-center">
                        <button
                            type="button"
                            className="mb-32 lg:mb-0 focus:outline-none border border-transparent"
                            onClick={leftArrowHandler}                        >
                            <LeftArrow />
                        </button>
                        {/* <div className="mt-20 lg:mt-0 lg:mx-20 lg:transform lg:translate-x-6"> */}
                            <OneSlide data={quoteData[current]} />
                        {/* </div> */}
                        <button
                            type="button"
                            className="mb-32 lg:mb-0 focus:outline-none border border-transparent"
                            onClick={rightArrowHandler}
                        >
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}