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
    useEffect(() => {
        //Every time the button is clicked, it will refresh
        //the card
    }, [isExpanded])
    return (
        <div className="py-4 max-w-2xl container bg-gray-50 border border-gray-100 shadow-lg" >
            <div className="grid grid-cols-1">
              <div className="flex justify-between">
                <h4 className="pl-10 text-lg font-semibold text-gray-900 ">{card.title}</h4>
                <div className="ml-52 mr-6">
                    <button
                    type="button"
                            className="h-8 w-8 rounded-full font-semibold text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none border border-transparent transform hover:scale-125 motion-reduce:transform-none transition duration-500 ease-in-out"
                            onClick={clickHandler}
                        >{!isExpanded ? `+` : `-`}
                        </button>
                    </div>
            </div>
                <p className="ml-10 mt-2 text-gray-700">
                    {isExpanded ?
                        `${card.info}` : ``}
                </p>
            </div>

        </div>
    )
}