import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'
import FancyImage from './FancyImage'
import { IReview } from './definitions'

export interface IProps {
    review: IReview
    prevHandler: () => void
    nextHandler: () => void
}
export default function Review({ review, prevHandler, nextHandler }: IProps) {
    // const fancyimageprops = {
    //     className: "mx-auto"
    // }
    return (
        <div className="flex flex-col justify-center">
            <div className="max-w-sm sm:max-w-2xl shadow-md mb-7 bg-gray-50 rounded-md">
                <div className="flex flex-col">
                    <FancyImage
                        // {...fancyimageprops}
                        image={review.image}
                        bgcolor={review.bgcolor} />
                    {/* <div className="flex justify-center mb-2 mt-6">
                        <div className="flex justify-center">
                            <div className="flex relative z-0 -space-x-36">
                                <span className="z-30 inline-block">
                                <img
                                        className="rounded-full h-36 w-36 object-cover"
                                    src={review.image}
                                    alt="photo"
                                    /></span>
                                <span className="z-20 transform translate-x-2 h-36 w-36  inline-block rounded-full bg-blue-700 border"></span>
                                <span className="z-40 transform translate-y-1 block h-9 w-9 rounded-full bg-blue-700 text-gray-700">"</span>

                            </div>
                        </div>
                    </div> */}
                    <p className="flex justify-center capitalize font-medium">{review.name}</p>
                    <p className="uppercase text-sm text-blue-600 flex justify-center">{review.job}</p>

                    <span className="mt-4">
                        <p className="text-center ml-5 mb-5 mr-5"> {review.text}
                        </p>
                    </span>
                    <div>
                        <div className="mb-2 flex justify-center">
                            <button
                                type="button"
                                onClick={prevHandler}>
                                <SVGChevronLeft css='h-5 w-5 mr-2 text-blue-600' />
                            </button>
                            <button
                                type="button"
                                onClick={nextHandler}>
                                <SVGChevronRight css='h-5 w-5 mr-l text-blue-600' />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center mb-5">
                        <button type="button"
                            className="px-4 py-1 text-lg rounded-md justify-center text-blue-600 hover:bg-blue-300 border border-transparent focus:outline-none"
                        >
                            Surprise Me
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}