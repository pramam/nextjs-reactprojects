import { useState, useEffect } from 'react'
import accordionData from './accordiondata.json'
import QuestionCard from './QuestionCard'

export default function Accordion() {
    return (
        <div className="flex justify-center">
            <div className="mt-16 sm:mt-24 sm:w-9/12 bg-gray-100 max-w-2xl md:max-w-5xl shadow-xl rounded-lg">
                <div className="xl:flex xl:justify-between">
                    <h1 className="pt-2 ml-10 mt-12 w-52 text-3xl font-semibold rounded-xs capitalize">Questions and Answers About My Account </h1>
                    <ul className="mt-12">
                        {accordionData.map((obj, index) => (
                            <li key={index}
                                // className="grid grid-cols-1 mt-4 mb-4 mr-10">
                                //   max-w-xl makes the expanded accordion same size as collapsed one in lg screens
                                className="flex justify-center lg:max-w-xl mt-4 mb-4 mx-2 lg:mr-10">
                                <QuestionCard card={obj} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}