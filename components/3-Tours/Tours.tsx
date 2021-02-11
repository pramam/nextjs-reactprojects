import { useState, useEffect } from 'react'
import Tour from './Tour'

const tours_url = "https://course-api.com/react-tours-project"


export default function Tours() {
    const [tours, setTours] = useState([]);

    const childDeleteHandler = (id) => {
        // alert(`Delete ${id}`)
        const newtours = tours.filter(item => item.id != id)
        setTours(newtours)
    }
    const getTours = async () => {
        try {
        const response = await fetch(tours_url);
        const mytours = await response.json();

        // console.log("hello")
        // console.log(`Tours: ${JSON.stringify(mytours)}`)

        setTours(mytours);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getTours()
    }, []) // get data only on 1st render

    return (
        <div >
            <div className="flex flex-col justify-center mb-10 sm:mb-16">
                <h1 className="mb-2 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-5xl font-semibold text-gray-900">Our Tours</h1>
                <div className="flex justify-center h-1.5 sm:h-2 rounded-lg mx-auto w-10 sm:w-20 bg-blue-800"></div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col">
                    {tours.map((obj, index) =>
                        <Tour key={index} tour={obj} deleteHandler={childDeleteHandler} />
                    )}
                </div>
            </div>
        </div>
    )
}