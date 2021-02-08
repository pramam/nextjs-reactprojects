import { useState } from 'react'
import { ITour } from './definitions'

export interface IProps {
    tour: ITour
}
export default function Tour({ tour }: IProps) {
    const [tourinfo, setTourinfo] = useState(tour.info);
    // const [textsize, setTextsize] = useState(250);
    // const [isreduced, setReduced] = useState(true)
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
                    <p className="ml-5 mb-5 mr-5"> {tourinfo.slice(0, 200)}...
                    <button className="inline-block text-blue-500" type="button" >Read more</button>
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