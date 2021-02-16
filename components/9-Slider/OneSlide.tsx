import SVGLeftQuote from "../svgicons/SVGLeftQuote";

export default function OneSlide({ data }) {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col-reverse lg:flex-row ">
                <div className="flex justify-center">
                    {/* TextCard: */}
                    <div className="lg:max-h-80 lg:transform lg:translate-y-8 shadow-2xl lg:z-30 text-gray-50 bg-gray-800 lg:rounded-md">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="ml-2 mt-10 lg:mt-16">
                                    <SVGLeftQuote css="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="mt-20 lg:mt-24 ml-3 mr-3 flex justify-center max-w-md text-xl">{data.quote}</h1>
                                    <h2 className="mt-4 ml-3 mb-20 lg:mb-0 font-semibold">&nbsp;-&nbsp;{data.name}</h2>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* ImageCard */}
                    <div className="max-w-36 px-20 lg:px-0 lg:max-w-xs lg:max-h-96 lg:z-20 lg:transform lg:-translate-x-12">
                        <img
                            className="h-72 lg:rounded-md lg:h-full object-cover flex justify-center items-center"
                            src={data.image}
                            alt={data.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}