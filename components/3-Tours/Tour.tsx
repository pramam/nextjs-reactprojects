import { useState, useEffect } from 'react'
import { ITour } from './definitions'

export interface IProps {
    tour: ITour
}
export default function Tour({ tour }: IProps) {
    const [textsize, setTextsize] = useState(200);
    const [readmore, setReadmore] = useState(false)

    useEffect(() => {
        // everytime I click Read More, change text size
        // useEffect causes a rerender, and the new textsize is picked
        // up by the JSX.
        readmore ? `${setTextsize(tour.info.length)}` :
            `${setTextsize(200)}`
    }, [readmore])

    const clickHandler = () => {
        // console.log(`readmore before: ${readmore}`)
        // console.log(`textsize before: ${textsize}`)
        setReadmore(!readmore);

        // This console.log is not working, setState is asynchronous
        // console.log(`readmore after: ${readmore}`)
        // console.log(`textsize after: ${textsize}`)
    }
    // const clickHandler = () => {
    //     isreduced ? `${setTextsize(500)} ${setReduced(false)}`
    //         :
    //         `${setTextsize(250)} ${setReduced(true)}`;
    //     setTourinfo(tour.info.slice(0, textsize));
    // }
    return (
        <div className="flex flex-col justify-center">
            <div className="max-w-sm sm:max-w-2xl shadow-md mb-7 bg-gray-50 rounded-b-md">
                <img
                    className="w-full h-80 object-cover flex rounded-t-md justify-center items-center"
                    src={tour.image}
                    alt="tour photo"
                />
                <span>
                    <div className="mt-5 mb-5 flex flex-row justify-between">
                        <h1 className="ml-5 text-md font-bold text-gray-800">{tour.name}</h1>
                        <h1 className="mr-5 text-md font-bold text-blue-400 bg-blue-100 rounded-full px-2.5 py-0.5">${tour.price}</h1>
                    </div>
                    <p className="ml-5 mb-5 mr-5"> {tour.info.slice(0, textsize)}
                        {!readmore ? `...` : ``}
                        <button
                            type="button"
                            onClick={clickHandler}
                            className="inline-block text-blue-500"
                        >
                            {!readmore ? `Read more` : `Read less`}
                        </button>
                    </p>
                </span>
            </div>

            {/* <div className="max-w-2xl shadow-md mb-5 bg-gray-50">
                <img
                    className="flex max-w-2xl h-92 rounded-t-md object-cover justify-center items-center"
                    src={tour.image}
                    alt="tour photo"
                />
                <p> {tour.info.slice(0, 50)}</p>
            </div> */}
        </div>
    )
}