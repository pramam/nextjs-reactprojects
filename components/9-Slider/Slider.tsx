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
                    {/* The line below had items-center 
                      * Not sure how justify-end works here, but it does*/}
                    <div className="flex flex-row justify-end">
                        <button
                            type="button"
                            className="mb-32 lg:mt-44 focus:outline-none border border-transparent"
                            onClick={leftArrowHandler}                        >
                            <LeftArrow />
                        </button>
                        <div className="relative lg:w-224">
                            {quoteData.map((obj, index) => {
                                return (
                                    <div key={index} className="lg:absolute lg:top-0 w-full">
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
                            className="mb-32 lg:mt-44 focus:outline-none border border-transparent"
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