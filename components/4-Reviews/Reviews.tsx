import { useState, useEffect } from 'react'
import reviewData from './reviewdata.json'
import Review from './Review'

export default function Reviews() {
    const [current, setCurrent] = useState(reviewData.length - 1);

    const clickPrevHandler = () => {
        // console.log(`clicked Prev, current: ${current}`)
        current === 0 ?
            setCurrent(reviewData.length - 1) : setCurrent(prevCurrent => prevCurrent - 1)
        // console.log(`after clicked Prev, current: ${current}`)

    }

    const clickNextHandler = () => {
        // console.log(`clicked Next, current: ${current}`)
        current === reviewData.length - 1 ?
            setCurrent(0) : setCurrent(prevCurrent => prevCurrent + 1)
        // console.log(`after clicked Next, current: ${current}`)
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const clickSurpriseMeHandler = () => {
        // console.log(`clicked SurpriseMe, current: ${current}`)
        const random = randomNumber(0, reviewData.length)
        // console.log(`random: ${random}`)
        random != current ?
            setCurrent(random)
            :
            clickNextHandler();
        
        // console.log(`after SurpriseMe, current: ${current}`)
    }
    useEffect(() => {
        // Every time current changes, re-render
    }, [current])
    return (
        <div>
            <div className="flex flex-col justify-center mb-10 sm:mb-12">
                <h1 className="mb-2 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-5xl font-semibold text-gray-900">Our Reviews</h1>
                <div className="flex justify-center h-1.5 sm:h-2 rounded-lg mx-auto w-10 sm:w-20 bg-blue-500"></div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <Review review={reviewData[current]}
                        prevHandler={clickPrevHandler}
                        nextHandler={clickNextHandler}
                        surpriseHandler={clickSurpriseMeHandler}
                    />
                    {/* {reviewData.map((obj, index) => {
                        return <Review review={obj} key={index} />
                    })} */}
                </div>
            </div>
            <span className="flex justify-center text-gray-500">Icons made by <a href="https://www.freepik.com" title="Freepik"> &nbsp; Freepik &nbsp; </a> from &nbsp;<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span> 
        </div>
    )
}