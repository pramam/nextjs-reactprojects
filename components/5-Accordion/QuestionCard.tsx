import { useState, useEffect } from 'react'
import { ICard } from './definitions'

export interface IProps {
    card: ICard
}
export default function QuestionCard({ card }: IProps) {
    const [isExpanded, setExpanded] = useState(false)
    const clickHandler = () => {
        setExpanded(!isExpanded)
    }
    // Don't need useEffect with isExpanded dependency
    // A refresh is done on the useState hook.

    return (
        // md:max-w-4xl is larger than lg:max-w-2xl because md has Q&A on top and cards below
        <div className="py-4 max-w-sm md:max-w-4xl lg:max-w-2xl container bg-gray-50 border border-gray-100 shadow-lg" >
            {/* <div className="grid grid-cols-1"> */}
            <div className="lg:max-w-2xl container">
                <div className="flex flex-col">
                    <div className="flex lg:justify-between">
                        <h4 className="pl-10 text-lg font-semibold text-gray-900">{card.title}</h4>
                        {/* This lg:ml-40 if reduced causes the accordion to shift */}
                        <div className="ml-10 lg:ml-40 mr-4 lg:mr-6">
                    <button
                    type="button"
                            className="h-8 w-8 rounded-full font-semibold text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none border border-transparent transform hover:scale-125 motion-reduce:transform-none transition duration-500 ease-in-out"
                            onClick={clickHandler}
                        >{!isExpanded ? `+` : `-`}
                        </button>
                    </div>
                </div>
                    <p className="lg:max-w-2xl ml-10 mt-2 mr-4 lg:mr-6 text-gray-700">
                    {isExpanded ?
                        `${card.info}` : ``}
                </p>
            </div>
            </div>
            {/* </div> */}
        </div>
    )
}