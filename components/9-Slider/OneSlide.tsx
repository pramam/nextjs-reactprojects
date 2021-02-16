import SVGLeftQuote from "../svgicons/SVGLeftQuote";

export default function OneSlide({ data }) {
    return (
        <div className="flex flex-row">
            <div className="flex justify-center">
                <div className="max-h-80 transform translate-y-8 shadow-2xl z-30 text-gray-50 bg-gray-800 rounded-md">
                    <div className="flex flex-col">
                        {/* <SVGLeftQuote /> */}
                        <h1 className="mt-20 ml-3 mr-3 flex justify-center max-w-md text-xl">{data.quote}</h1>
                        <h2 className="mt-4 ml-3 font-semibold">&nbsp;-&nbsp;{data.name}</h2>
                    </div>
                </div>
                <div className="lg:max-w-xs max-h-96 z-20 transform -translate-x-12">
                    <img
                        className="rounded-md h-full object-cover flex justify-center items-center"
                        src={data.image}
                        alt={data.alt}
                    />
                </div>
            </div>
        </div>
    )
}