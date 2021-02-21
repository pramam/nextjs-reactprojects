import SVGLeftQuote from "../../svgicons/SVGLeftQuote";

export default function OneSlideG({ data }) {
    return (
        // * TOTAL WIDTH is specified in Slider.tsx

        // TextCard and ImageCard together:
        // TextCard: Width: max-w-xs sm:max-w-lg md:max-w-lg lg:w-auto        
        // ImageCard:Width: max-w-xs sm:max-w-lg md:max-w-lg lg:max-w-xs & lg:-translate-x-12

        // * TOTAL HEIGHT is specified in Slider.tsx
        // TextCard:  Height:      lg:h-80 (w-full)
        // ImageCard: Height: h-80 lg:h-96 (w-full)

        // Total width of lg: mx-20(5rem + 5rem) + ml-2 + w-7 + text + max-w-xs(Image, w-80) - translate-x-12 = 20x2 +2 +7 + 80 -12 = 117 + text width
        // Old trial and error, I'd settled on lg:w-224 encompassing the entire breadth of lg: which is used in Slider.tsx. 
        // It looks nice so leave it alone.

        <div className="mt-16 md:mt-20 lg:mt-0 lg:mx-20 lg:transform lg:translate-x-6">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col-reverse justify-center lg:flex-row ">
                    {/* TextCard: Width: max-w-xs sm:max-w-lg md:max-w-lg lg:w-auto */}
                    <div className="max-w-xs sm:max-w-lg md:max-w-lg lg:w-auto">
                        <div className="flex justify-center">
                            {/* TextCard: Height: lg:h-80*/}
                            <div className="w-full lg:h-80 lg:transform lg:translate-y-8 lg:shadow-2xl lg:z-30 text-gray-50 bg-gray-800 lg:rounded-md">
                                <div className="flex flex-col">


                                    <div className="flex flex-row">
                                        <div className="ml-2 mt-6 md:mt-8 lg:mt-16">
                                            <SVGLeftQuote css="h-5 w-5 md:h-6 w-6 lg:h-7 lg:w-7 text-white" />
                                        </div>
                                        <div>
                                            <h1 className="mt-12 md:mt-16 lg:mt-24 ml-3 mr-3 flex justify-center text-xs md:text-base lg:text-xl">{data.quote}</h1>
                                            <h2 className="mt-4 ml-3 mb-6 md:mb-10 lg:mb-0 font-semibold text-xs md:text-sm lg:text-base">&nbsp;-&nbsp;{data.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* ImageCard: Width: max-w-xs sm:max-w-lg md:max-w-lg lg:max-w-xs */} { /*lg:-translate-x-12*/}
                        {/* ImageCard: Height: h-80 lg:h-96 */}
                        <div className="max-w-xs sm:max-w-lg md:max-w-lg lg:max-w-xs">
                            <div className="lg:px-0 lg:z-20 lg:transform lg:-translate-x-12">
                                <img
                                    className="w-full h-80 lg:h-96 lg:rounded-md object-cover flex justify-center items-center"
                                    src={data.image}
                                    alt={data.alt}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}