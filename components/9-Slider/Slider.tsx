import { useState } from 'react'
import quoteData from './sliderdata.json'
import OneSlide from './OneSlide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Slider() {
    const [current, setCurrent] = useState(0)
    //previous is on the left, next is on the right
    const [previous, setPrevious] = useState(quoteData.length - 1);
    const [next, setNext] = useState(1);

    const leftArrowHandler = () => {
        // current moves right
        current === 0 ? setCurrent(quoteData.length - 1) : setCurrent(prev => prev - 1)
        console.log(`leftArrowHandler: new current:${current}`)

    }

    const rightArrowHandler = () => {
        // Initial places on line 1.
        // 1. previous  current    next      : previous has 1 slide, current has 1 slide, next has all the rest of the slides stacked up
        //    --------  -------    ----
        // 2.            next                : next moves left to current, gets current_props
        // 3.  current     |                 : current moves left to previous, gets previous_props
        // 4.              |        previous : previous moves to the next spot, getting next_props
        // 5. *previous *current    *next    : Final positions

        // current gets current + 1, which is next (line 5 middle is line 2 middle)
        // prev is oldCurrent
        // next is oldPrevious
        // At the end we'll have 1 slide on the left, 1 slide on the middle, and everything else on the right

        const oldCurrent = current;
        current === quoteData.length - 1 ?
            setCurrent(0) : setCurrent(prevCurrent => prevCurrent + 1)
        const oldPrevious = previous;
        setPrevious(oldCurrent);
        setNext(oldPrevious);
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

                        <div className="relative">
                            <div className="flex flex-row">
                                {/* TOTAL WIDTH: This is the width calculated in OneSlide.tsx*/}
                                {/* TOTAL HEIGHT: This is the height calculated in OneSlide.tsx */}
                                {/* overflow-auto puts a scroll bar for <=md screens. Not working for lg:screens */}
                                <div className="h-200 lg:h-140 lg:top-0 w-56 md:w-128 lg:w-224">
                                   {quoteData.map((obj, index) => {
                                    // All the height and width props are outside of the map
                                    const current_props = "absolute transition ease-in-out duration-700";
                                    const right_props = "absolute lg:transform  lg:translate-x-full";//lg:-translate-y-full
                                    const left_props = "absolute lg:transform lg:-translate-x-full"

                                    return (
                                        <div
                                               key={index}
                                            // In the line below, anything that is not current and not previous,
                                            // gets right_props. So other than prev and current, all the rest of the slides
                                            // stack up on top of each other in absolute position on the right of the right arrow button.
                                            className={`${index === current ? current_props :
                                                index === previous ? left_props : right_props}`}
                                        >
                                            <OneSlide data={obj} />
                                           </div>
                                    )
                                    })}
                                </div>
                            </div>
                        </div>
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