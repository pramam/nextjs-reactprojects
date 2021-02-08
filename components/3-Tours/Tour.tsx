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
            <div className="max-w-2xl shadow-md mb-5 bg-gray-50">
                <img
                    className="w-full flex rounded-t-md justify-center items-center"
                    src={tour.image}
                    alt="tour photo"
                />
                <span>
                    <p> {tourinfo.slice(0, 250)}</p>
                    <button type="button" >See more</button>
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