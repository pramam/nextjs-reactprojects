import { ICard } from './definitions'

export interface IProps {
    card: ICard
}
export default function QuestionCard({ card }: IProps) {
    return (
        <div className="py-4 bg-gray-50 border border-gray-100 shadow-lg" >
            <div className="flex justify-between">
                <h4 className="pl-10 text-lg font-semibold text-gray-900 ">{card.title}</h4>
                <div className="ml-52 mr-6">
                <button
                    type="button"
                        className="h-8 w-8 rounded-full font-semibold text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none border border-transparent transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out"
                >+</button>
                </div>
            </div>
        </div>
    )
}