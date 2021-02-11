import birthdayData from '../components/1-Birthday/birthdaydata.json'
import AllBirthdays from '../components/1-Birthday/AllBirthdays'
import Bubble from '../components/0-Bubbles/Bubble'

export default function projects() {

    return (
        <body className="h-full bg-pink-400">
        < AllBirthdays birthday_array={birthdayData} />
        </body>
    )
}