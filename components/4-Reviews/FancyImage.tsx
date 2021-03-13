import SVGRightQuote from '../svgicons/SVGRightQuote'

export interface IProps {
    image: string
    bgcolor: string
}

// {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */ }
export default function FancyImage({ image, bgcolor }: IProps) {
    // For dynamic colors to work, postcss needs the full class name so as not to purge it
    // Add the colors here so they don't get purged:
    //const bg_colors = "bg-pink-500 bg-yellow-500 bg-blue-500 bg-green-500"
    const bigcircle_props = {
        className: `z-20 transform translate-x-2.5 -translate-y-1.5 h-36 w-36  inline-block rounded-full ${bgcolor} border`
    }
    const smallcircle_props = {
        className: `z-40 transform translate-y-1 block h-9 w-9 rounded-full ${bgcolor}`
    }
    return (
        <div className="mb-2 mt-6">
            <div className="flex justify-center">
                <div className="transform -translate-x-12">
                    <div className="flex relative z-0 -space-x-36">
                        <span className="z-30 inline-block">
                            <img
                                className="rounded-full h-36 w-36 object-cover"
                                src={image}
                                alt="photo"
                            /></span>
                        <span {...bigcircle_props}></span>
                        <span {...smallcircle_props}>
                            <div className="flex mx-2.5 my-3">
                                <SVGRightQuote css="h-4 w-4 text-white" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}