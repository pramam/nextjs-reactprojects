import { useState, useEffect } from 'react'
import accordionData from './accordiondata.json'
import QuestionCard from './QuestionCard'

export default function Accordion() {
    return (
        <div className="flex justify-center">
            <div className="mt-10 sm:w-9/12 bg-gray-100 max-w-5xl shadow-xl rounded-lg">
                <div className="flex justify-between">
                    <h1 className="pt-2 ml-10 mt-12 w-52 text-3xl font-semibold rounded-xs capitalize">Questions and Answers About My Account </h1>
                    <ul className="mt-12">
                        {accordionData.map((obj, index) => (
                            <li key={index}
                                className="grid grid-cols-1 mt-4 mb-4 mr-10">
                                <QuestionCard card={obj} />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}