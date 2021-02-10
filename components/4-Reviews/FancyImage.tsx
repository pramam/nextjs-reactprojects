export interface IProps {
    image: string
    bgcolor: string
}

export default function FancyImage({ image, bgcolor }: IProps) {
    // For dynamic colors to work, postcss needs the full class name so as not to purge it
    // Add the colors here so they don't get purged:
    //const bg_colors = "bg-pink-500 bg-yellow-500 bg-blue-500 bg-green-500"
    const bigcircle_props = {
        className: `z-20 transform translate-x-2.5 -translate-y-0.5 h-36 w-36  inline-block rounded-full ${bgcolor} border`
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
                        {/* <span className="z-20 transform translate-x-2.5 -translate-y-0.5 h-36 w-36  inline-block rounded-full bg-blue-500 border"></span> */}
                        <span {...bigcircle_props}></span>
                        {/* <span className="z-40 transform translate-y-1 block h-9 w-9 rounded-full bg-blue-500"> */}
                        <span {...smallcircle_props}>
                            <h2 className="flex mx-auto my-1 italic text-white font-extrabold text-4xl">
                                &#8221;
                                {/* &#xe01a; */}
                                {/* “ ” */}
                                {/* \201D */}
                            </h2></span>
                        {/* <blockquote><p>Hello</p></blockquote> */}
                        {/* <span className="z-30 absolute inset-x-0 top-0 transform -translate-y-1.5 translate-x-4 h-36 w-36  inline-block rounded-full bg-transparent border border-red-500"></span> */}
                    </div>
                </div>
            </div>
        </div >
    )
}