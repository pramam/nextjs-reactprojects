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
        // SPECIFY TOTAL HEIGHT in parent container, with overflow-hidden so the background color shows around
        // the child absolute element
        // h-180 was butting up against the text in the smallest phone, make it h-200
        // lg:h-120 butts up to the edge of the picture, add mb-32= h-120+32=h-152(38rem)
        // lg:h-152 here, but lg:h-140 for OneSlide. Leaving space for the "dots" component
        <div className="relative bg-gray-900 h-200 lg:h-152 overflow-hidden">
            <div className="flex justify-center">
                <div className="lg:mt-32">
                    <div className="flex flex-row justify-center">
                        <button
                            type="button"
                            // lg:w-224, so move the button half this distance to the left 112
                            // md:w-128, so move the button half this distance to the left w-64
                            // w-56, so move the button half this distance to the left w-28, Needing a bit more space so w-32
                            className="absolute z-40 transform -translate-x-32 md:-translate-x-64 mt-52 lg:-translate-x-112 lg:mt-44 focus:outline-none border border-transparent"
                            onClick={leftArrowHandler}                        >
                            <LeftArrow />
                        </button>
                        {/* TOTAL WIDTH: This is the width calculated in OneSlide.tsx*/}
                        <div className="relative w-56 md:w-128 lg:w-224">
                            {quoteData.map((obj, index) => {
                                return (
                                    // TOTAL HEIGHT
                                    // overflow-auto puts a scroll bar for <=md screens. Not working for lg:screens
                                    <div key={index} className="absolute h-200 lg:h-140 overflow-auto lg:top-0 w-full">
                                        <OneSlide data={obj} />
                                    </div>
                                )
                            })}
                        </div>
                        {/* <div className="relative lg:w-224">
                            <div className="lg:absolute lg:top-20 w-full">
                            <OneSlide data={quoteData[current]} />
                            </div>
                        </div> */}
                        <button
                            type="button"
                            // Mirror image of the LeftArrow
                            className="absolute z-40 transform translate-x-32 md:translate-x-64 mt-52 lg:translate-x-112 lg:mt-44 focus:outline-none border border-transparent"
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