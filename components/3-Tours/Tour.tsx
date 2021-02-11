import { useState, useEffect } from 'react'
import { ITour } from './definitions'

export interface IProps {
    tour: ITour
    deleteHandler: (id: string) => void
}
export default function Tour({ tour, deleteHandler }: IProps) {
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

    return (
        <div className="flex flex-col justify-center">
            <div className="max-w-xs sm:max-w-2xl shadow-md mb-7 bg-gray-50 rounded-b-md">
                <img
                    className="w-full h-80 object-cover flex rounded-t-md justify-center items-center"
                    src={tour.image}
                    alt="tour photo"
                />
                <span>
                    <div className="mt-5 mb-5 flex flex-row justify-between">
                        <h1 className="ml-5 text-md font-bold text-gray-800">{tour.name}</h1>
                        <h1 className="mr-5 text-md font-bold text-blue-400 bg-blue-100 rounded-lg sm:rounded-full sm:px-2.5 sm:py-0.5">${tour.price}</h1>
                    </div>
                    <p className="ml-5 mb-5 mr-5"> {tour.info.slice(0, textsize)}
                        {!readmore ? `...` : ``}
                        <button
                            type="button"
                            onClick={clickHandler}
                            className="inline-block text-blue-500"
                        >
                            {!readmore ? `Read more` : `Show less`}
                        </button>
                    </p>
                </span>
                <div className="flex justify-center mb-5">
                    <button type="button"
                        className="px-12 py-1 text-lg rounded-md justify-center text-red-700 border border-red-700 focus:outline-none focus:border-red-700"
                        // delete this tour from parent's array of Tours
                        onClick={() => deleteHandler(tour.id)}
                    >
                        Not interested
                </button>
                </div>
            </div>
        </div>
    )
}