import { useState } from 'react'
import quoteData from './sliderdata.json'
import OneSlide from './OneSlide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Slider() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="lg:mt-32">
                    <div className="flex flex-row items-center">
                        <LeftArrow />
                        {/* <div className="rounded-full h-10 w-10 bg-gray-700">
                            <div className="mx-0.5 my-1">
                                <SVGChevronLeft css="h-8 w-8 text-gray-50" />
                            </div>
                        </div> */}
                        <div className="lg:mx-20 lg:transform lg:translate-x-6">
                        <OneSlide data={quoteData[1]} />
                        </div>
                        <RightArrow />
                        {/* <div className="rounded-full h-10 w-10 bg-gray-700">
                            <div className="mx-0.5 my-1">
                                <SVGChevronRight css="h-8 w-8 text-gray-50" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}