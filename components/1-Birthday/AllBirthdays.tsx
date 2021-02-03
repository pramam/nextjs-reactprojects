import { IBirthday } from './definitions'
import Birthday from './Birthday'
import birthdaydata from './birthdaydata.json'


export interface IProps {
    birthday_array: IBirthday[]
}
export default function AllBirthdays({ birthday_array }: IProps) {
    return (
        <div>
            <div className="flex justify-center bg-pink-400">
                <div className="mt-10 mb-10 w-1/3 bg-gray-50 rounded-md shadow-2xl">
                    <div className="flex mb-5 px-5 mt-5">
                        <h3 className="text-2xl text-gray-900 mb-2">{birthdaydata.length} Birthdays today</h3>
                    </div>
                    {birthdaydata.map((obj, index) => (
                        <ul className="px-5 items-center">
                            <Birthday birthday={obj} />
                        </ul>
                    ))}
                    <div className="flex justify-center mb-5">
                        <button className="justify-center px-32 rounded-md bg-pink-400 text-white py-2 focus:outline-none border border-transparent rounded" type="button">Clear all</button>
                    </div>
                </div>
            </div >
        </div >
    )
}