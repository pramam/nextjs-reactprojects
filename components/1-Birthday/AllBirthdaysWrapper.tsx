import birthdayData from './birthdaydata.json'
import AllBirthdays from './AllBirthdays'

export default function AllBirthdaysWrapper() {
    return (
        < AllBirthdays birthday_array={birthdayData} />
    )
}