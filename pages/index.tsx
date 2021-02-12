import React from 'react'
import allprojectsData from '../data/allprojects.json'

function allprojects() {
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col justify-center mb-10 sm:mb-16">
                <h1 className="mb-2 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-3xl font-semibold text-gray-900">React Projects</h1>
                <div className="flex justify-center h-1.5 sm:h-2 rounded-lg mx-auto w-10 sm:w-20 bg-blue-800"></div>
            </div>
            {/* <div className="flex flex-col justify-center mb-10 sm:mb-16">
                <h1 className="mb-2 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-5xl font-semibold text-gray-900">Our Tours</h1>
                <div className="flex justify-center h-1.5 sm:h-2 rounded-lg mx-auto w-10 sm:w-20 bg-blue-800"></div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {allprojectsData.map((obj, index) => (
                    <a href={obj.url} className="mb-12">
                        <article className="transform hover:scale-105 motion-reduce:transform-none transition duration-500 ease-in-out">
                            <div className="mt-2 flex flex-col flex-shrink shadow-lg mx-4">
                                <div className="max-w-28">
                                    <img
                                        className="h-64 w-70 object-cover"
                                        src={obj.image}
                                        alt={obj.name} />
                                </div>
                                <div className="bg-gray-50">
                                    <div className="m-3 flex justify-center text-xl font-semibold text-gray-400">{obj.name}</div>
                                </div>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </div >
    )
}

export default allprojects
