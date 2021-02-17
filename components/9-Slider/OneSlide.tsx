import SVGLeftQuote from "../svgicons/SVGLeftQuote";

export default function OneSlide({ data }) {
    return (
        // TOTAL WIDTH is specified in Slider.tsx
        // TOTAL WIDTH of lg:mx-20(5rem+5rem) + ml-2(0.5rem) + w-7(1.75rem) + max-w-md(28rem)= 42rem = w-168
        //                    w-168(42rem) cut off the image, so I went with w-224(56rem)

        // TOTAL WIDTH OF md and lower: Max width of image or text:
        // ml-2(0.5rem) + w-7(1.75rem) + max-w-md(28rem)= 30.25rem ~ 32rem = w-128
        // w-128 is working for md: screens but not for phones.

        // The smallest phone, iphone4, is 320px, with ml-2 around the text card
        // TOTAL WIDTH of phones: assume 320px(=20rem, =w-80) - mx-2(m-2 is .5rem, so mx-2 is 1rem)
        //                       = w-80 - w-4(1rem) = w-76 (19rem)
        //                       w-76 is too much for the smallest screen, no space for buttons
        //                       Try w-72: On the smallest phone, there is no space for the arrows
        //                       Try w-64: 16rem, buttons getting cut off
        //                       Try w-60: buttons getting cut off
        //                       Try w-56: works.

        // HEIGHT:lg: mt-20 + max(lg:max-h-80, lg:h-96) = mt-20 + h-96 = lg:h-116, make it h-120(30rem, 480px)
        // HEIGHT:md: mt-20 + height of image + height of text card in one direction, and same a lg:height in other direction
        // WIDTH: lg:mx-20
        // HEIGHT mt-20
        <div className="mt-20 lg:mt-0 lg:mx-20 lg:transform lg:translate-x-6">
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col-reverse lg:flex-row ">
                <div className="flex justify-center">
                    {/* TextCard: */}
                    <div className="lg:max-h-80 lg:transform lg:translate-y-8 shadow-2xl lg:z-30 text-gray-50 bg-gray-800 lg:rounded-md">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                    {/* WIDTH lg: ml-2  */}
                                    {/* HEIGHT: mt-10 */}
                                <div className="ml-2 mt-10 lg:mt-16">
                                        {/* WIDTH lg: w-7  */}
                                        {/* HEIGHT: h-7 */}
                                    <SVGLeftQuote css="h-7 w-7 text-white" />
                                </div>
                                <div>
                                        {/* WIDTH: lg:max-w-md  */}
                                        {/* WIDTH <= md: max-w-md */}
                                        {/* HEIGHT: lg:mt-24 + mt-4 + size of text */}
                                    <h1 className="mt-20 lg:mt-24 ml-3 mr-3 flex justify-center max-w-md text-xl">{data.quote}</h1>
                                    <h2 className="mt-4 ml-3 mb-20 lg:mb-0 font-semibold">&nbsp;-&nbsp;{data.name}</h2>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* ImageCard */}
                        {/* WIDTH: lg:max-w-xs + lg:-translate-x-12: Did not calclate this */}
                        {/* WIDTH: <= md: w-full */}
                        {/* HEIGHT: md:h-72 lg:h-96 */}
                    <div className="w-full lg:max-w-xs flex justify-center">
                        <div className="px-5 lg:px-0 lg:z-20 lg:transform lg:-translate-x-12">
                        <img
                                className="h-72 lg:rounded-md lg:h-96 object-cover items-center"
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