import reviewData from './reviewdata.json'
import Review from './Review'

export default function Reviews() {
    return (
        <div>
            <div className="flex flex-col justify-center mb-12">
                <h1 className="mb-4 mt-12 flex justify-center text-5xl font-semibold text-gray-900">Our Reviews</h1>
                <div className="flex justify-center h-2 rounded-lg mx-auto w-20 bg-blue-500"></div>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col">
                    {reviewData.map((obj, index) => {
                        return <Review review={obj} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}