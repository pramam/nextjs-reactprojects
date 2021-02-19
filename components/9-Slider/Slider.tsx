import { useState, useEffect } from 'react'
import quoteData from './sliderdata.json'
import OneSlide from './OneSlide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Slider() {
    const [current, setCurrent] = useState(0)
    //previous is on the left, next is on the right
    const [previous, setPrevious] = useState(quoteData.length - 1);
    const [next, setNext] = useState(1);

    // Automated playing of the quotes
    // This can be achieved by 'clicking'(calling) the right arrow button every few seconds
    // It will automatically move the next and prev slides to where they need to be.
    // This in turn, changes current, and by having current as a dependency, we land
    // up calling setTimeout in a loop
    // useEffect(() => {
    //     setTimeout(rightArrowHandler, 5000)
    // }, [current]) //Call setTimeout everytime current changes, which is every time rightArrowHandler is called

    // Create an array to display the Dots component
    let dots = []
    for (let i = 0; i <= quoteData.length - 1; i++)
        dots.push(i)

    const leftArrowHandler = () => {
        // Initial places on line 1.
        //             <                      : Everything slides to the right
        // 1. previous   current    next      : previous has 1 slide, current has 1 slide, next has all the rest of the slides stacked up
        //    --------   -------    ----
        // 2.                       current   : current moves right to next, gets next_props        
        // 3.            previous             : previous moves right to current
        // 4. (prev -1)     |                 : Don't move next to the previous spot, it messes it up
        //                  |                 : Set the prev-1 slide to be on the left
        // 5. *previous *current    *next     : Final positions

        // current gets current - 1, which is previous (line 5 middle is line 3 middle)
        // next is oldCurrent
        // prev is oldNext
        // At the end we'll have 1 slide on the left, 1 slide on the middle, and everything else on the right

        const oldCurrent = current;
        const oldPrevious = previous;

        setNext(oldCurrent);
        oldPrevious == 0 ? setPrevious(quoteData.length - 1) : setPrevious(oldPrevious - 1);
        current === 0 ? setCurrent(quoteData.length - 1) : setCurrent(i => i - 1)

        console.log(`rightArrowHandler: new current: ${current}`)
    }

    const rightArrowHandler = () => {
        // Initial places on line 1.
        //                      >            : Everything slides to the left 
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
            setCurrent(0) : setCurrent(i => i + 1)
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
                                       const right_props = "absolute transform  translate-x-full";//lg:-translate-y-full
                                       const left_props = "absolute transform -translate-x-full"

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
                        {/* Don't remove this div, removing it gives long vertical lines */}
                        <div className="absolute">
                            {/* Dots component */}
                            <div className="flex flex-row">
                                {dots.map((obj, index) => {
                                    const active_dot_props = "px-1.5"
                                    const inactive_dot_props = "px-0.5"
                                    // lg:mt-112 positioning by trial and error until it looked nice
                                    // md:mt-168 positioning by trial and error until it looked nice
                                    // mt-180 could overlap long text on phone screens
                                    // Best to hide the dot component for <= md: screens by setting opacity to 0
                                    const common_dot_props = "relative transform transition-all duration-700 ease-in-out opacity-0 lg:opacity-100 mt-180 md:mt-168 lg:mt-112 z-40 bg-gray-50 bg-gray-50 py-0.5 mr-1 rounded-full"

                                    return (
                                        <div className={`${index == current ?
                                                `${common_dot_props} ${active_dot_props}` : `${common_dot_props} ${inactive_dot_props}`}`}>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}