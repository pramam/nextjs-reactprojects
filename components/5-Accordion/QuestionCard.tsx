import { ICard } from './definitions'

export interface IProps {
    obj: ICard
}
export default function QuestionCard({ obj }: IProps) {
    return (
        <div className="py-4 bg-gray-50 border border-gray-100 shadow-lg" >
            <div className="flex justify-between">
                <h4 className="pl-10 text-lg font-semibold text-gray-900 ">{obj.title}</h4>
                <button
                    type="button"
                    className="ml-52 mr-6 h-8 w-8 rounded-full font-semibold text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 focus:outline-white border border-transparent"
                >+</button>
            </div>
        </div>
    )
}