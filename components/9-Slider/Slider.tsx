import { useState, useEffect } from 'react'
import OneSlide from './OneSlide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

import { ISlide } from './definitions'

export interface IProps {
    slides: ISlide[]
}

export default function Slider({ slides }: IProps) {
    const [current, setCurrent] = useState(0)
    //previous is on the left, next is on the right
    const [previous, setPrevious] = useState(slides.length - 1);
    const [next, setNext] = useState(1);

    // Automated playing of the quotes
    // This can be achieved by 'clicking'(calling) the right arrow button every few seconds
    // It will automatically move the next and prev slides to where they need to be.
    // This in turn, changes current, and by having current as a dependency, we land
    // up calling setTimeout in a loop
    // Do a cleanup of the timer otherwise you will run into an infinite loop of Timers
    useEffect(() => {
        const timer_id = setTimeout(rightArrowHandler, 5000)
        // Do a cleanup of the timer, else the timers will interfere with each other on every re-render
        return (() => clearTimeout(timer_id))
    }, [current]) //Call setTimeout everytime current changes, which is every time rightArrowHandler is called

    // Create an array to display the Dots component
    let dots = []
    for (let i = 0; i <= slides.length - 1; i++)
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
        oldPrevious == 0 ? setPrevious(slides.length - 1) : setPrevious(oldPrevious - 1);
        current === 0 ? setCurrent(slides.length - 1) : setCurrent(i => i - 1)

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
        current === slides.length - 1 ?
            setCurrent(0) : setCurrent(i => i + 1)
        const oldPrevious = previous;
        setPrevious(oldCurrent);
        setNext(oldPrevious);
        console.log(`rightArrowHandler: new current: ${current}`)
    }

    return (
        // SPECIFY TOTAL HEIGHT in parent container, with overflow-hidden so the background color shows around
        // the child absolute element

        // Font sizes are smaller for smaller viewports, so have to eyeball this.

        // This is the total height of Slider:
        // From OneSlide:
        // TextCard:  Height:      lg:h-80 (w-full)
        // ImageCard: Height: h-80 lg:h-96 (w-full)
        // So, for <lg:, height is minimum h-80 + height of text card,
        //               eyeballed to h-156 md:h-168
        // lg:h-96, eyeballed to lg:h-152
        // lg:h-120 butts up to the edge of the picture, add mb-32= h-120+32=h-152(38rem)
        // lg:h-152 here, but lg:h-140 for OneSlide. Leaving space for the "dots" component

        // Eye balling these heights for current length of quotes.
        // Here                                :  h-156 md:h-168 lg:h-152
        // Just for OneSlide, container of .map:  h-156 md:h-168 lg:h-140
        // If the quotes get too long, there will be a little bit of room for the text box up to md: screens, to expand below.

        // TODO-HEIGHT1: bg-red-900 Change this height for lg: if quotes become too long; Change corresponding height in TODO-HEIGHT2
        // If TODO-HEIGHT1 and TODO-HEIGHT2 are changed then the Dots component(TODO-HEIGHT3) and Arrow(TODO-HEIGHT4) may need to be moved down.
        // *Important: Add non-standard heights to tailwind.config.js
        // The arrows may also need to be moved down.
        <div className="relative bg-gray-900 h-156 md:h-168 lg:h-152 overflow-hidden">
            <div className="flex justify-center">
                <div className="lg:mt-32">
                    <div className="flex flex-row justify-center">
                        <button
                            type="button"
                            // .map widths:
                            // w-80 sm:w-128 md:w-128 lg:w-224
                            // Button is in center of screen so translate -x 1/2 of the above widths
                            // w-80: -translate-x-40 is getting cut off on iphone4, and looking bad on some other mobiles in portrait
                            //       -translate-x-36 fits better
                            // sm:w-128: -translate-x-64 cuts the image in an awkward way
                            //           -translate-x-72, same as md: works! Arrows are outside the image
                            // md:w-128: -translate-x-64 cuts the image. 
                            //           There is extra room on the sides:
                            //           -translate-x-72 works better. Arrows are off the image
                            // lg:224: -translate-x-112 seems to work since there was mx-20 on either side of OneSlide.
                            // So final button translations: x-36 sm:x-72 md:x-72 lg:x-112

                            // Arrows are moved down with translate-y-* instead of mt-*. mt makes the entire margin a button, which is not what we want.
                            // TODO-HEIGHT4: If TODO-HEIGHT1 and TODO-HEIGHT2 change, the arrows might have to be eyeballed and moved
                            className="absolute z-40 transform -translate-x-36 sm:-translate-x-72 md:-translate-x-72 lg:-translate-x-112 translate-y-64 md:translate-y-64 lg:translate-y-44 focus:outline-none border border-transparent"
                            onClick={leftArrowHandler}
                        >
                            <LeftArrow />
                        </button>

                        <div className="relative">
                            <div className="flex flex-row">
                                {/* TOTAL WIDTH: This is the width calculated in OneSlide.tsx*/}
                                {/* lg:w-224(56rem) = 896 px = w-224, by trial and error  */}
                                {/* mobiles:max-w-xs(20rem) = 320px = w-80   */}
                                {/* sm:max-w-lg(32rem) = 512px = w-128   */}
                                {/* md:max-w-lg(32rem) = 512px = w-128 */}

                                {/* TOTAL HEIGHT: This is the height calculated in OneSlide.tsx */}
                                {/* These heights here were eyeballed due to varying font sizes: h-156 md:h-168 lg:h-140
                                    Note that the entire height of Slider(top most div) is     : h-156 md:h-168 lg:h-152
                                    If TODO-HEIGHT2 is changed, then TODO-HEIGHT1 must also be changed */}

                                {/* I need the height AND width here for the boundary, inside this is the absolute OneSlide */}
                                {/* TODO-HEIGHT2: bg-green-900 Change this height if quotes become too long */}
                                <div className="h-156 md:h-168 lg:h-140 lg:top-0 w-80 sm:w-128 md:w-128 lg:w-224">
                                    {slides.map((obj, index) => {
                                    // All the height and width props are outside of the map
                                       const current_props = "absolute opacity-1 transition ease-in-out duration-700";
                                       // Not sure if I need overflow-hidden below
                                       const right_props = "absolute opacity-0 overflow-hidden transform  translate-x-full";//lg:-translate-y-full
                                       const left_props = "absolute opacity-0 overflow-hidden transform -translate-x-full"

                                    return (
                                        <div
                                               key={index}
                                            // In the line below, anything that is not current and not previous,
                                            // gets right_props. So other than prev and current, all the rest of the slides
                                            // stack up on top of each other in absolute position on the right of the right arrow button(right_props).
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
                            // Mirror image of the LeftArrow for translate-x; Same as LeftArrow for translate-y
                            // Left Arrow: className="absolute z-40 transform -translate-x-36 sm:-translate-x-72 md:-translate-x-72 lg:-translate-x-112 translate-y-64 md:translate-y-64 lg:translate-y-44 focus:outline-none border border-transparent"
                            className="absolute z-40 transform translate-x-36 sm:translate-x-72 md:translate-x-72 lg:translate-x-112 translate-y-64 md:translate-y-64 lg:translate-y-44 focus:outline-none border border-transparent"
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
                                    // translate-y-148 md:translate-y-156 lg:translate-y-112
                                    // TODO-HEIGHT3: The translate-y-* values are eyeballed. If any TODO-HEIGHT changes, these may need to be changed.
                                    const common_dot_props = "relative transform transition-all duration-700 ease-in-out translate-y-148 md:translate-y-156 lg:translate-y-112 z-40 bg-gray-50 py-0.5 ml-2 mr-2 rounded-full"

                                    return (
                                        <div key={index}>
                                        <button
                                            type="button"
                                            className="focus:outline-none border border-transparent"
                                            onClick={() =>
                                                setCurrent(index)
                                            }
                                        >
                                                <span aria-label={`Select Slide ${index + 1}`}>
                                                    <div aria-hidden="true"
                                                        className={`${index == current ?
                                                            `${common_dot_props} ${active_dot_props}` : `${common_dot_props} ${inactive_dot_props}`}`}>
                                                    </div>
                                                </span>
                                        </button>
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