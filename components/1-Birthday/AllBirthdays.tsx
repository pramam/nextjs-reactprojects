import { useState } from 'react'
import { IBirthday } from './definitions'
import Birthday from './Birthday'

export interface IProps {
    birthday_array: IBirthday[]
}
export default function AllBirthdays({ birthday_array }: IProps) {
    const [birthdays, setBirthdays] = useState(birthday_array)
    const clickHandler = () => {
        setBirthdays([]);
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="mt-10 sm:mt-20 sm:w-2/5 lg:w-1/4 2xl:w-1/5 bg-gray-50 rounded-md shadow-2xl">
                    <div className="flex mb-5 px-5 mt-5">
                        <h3 className="text-2xl text-gray-900 mb-2">{birthdays.length} Birthdays today</h3>
                    </div>
                    <ul className="px-5 items-center">
                        {birthdays.map((obj, index) => (
                            <Birthday key={index} birthday={obj} />
                        ))}
                    </ul>
                    <div className="flex justify-center mb-5">
                        <button
                            className="justify-center px-8 sm:px-16 md:px-24 rounded-md bg-pink-400 text-white py-2 focus:outline-none border border-transparent"
                            type="button"
                            onClick={clickHandler}>
                            Clear all
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}