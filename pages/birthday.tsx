import birthdayData from '../components/1-Birthday/birthdaydata.json'
import AllBirthdays from '../components/1-Birthday/AllBirthdays'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function projects() {

    return (
        <div className="min-h-screen bg-pink-400">
            <ProjectNavbarContainer
                projectName="Birthday Reminder"
                textColor="text-gray-50"
            />
        < AllBirthdays birthday_array={birthdayData} />
        </div>
    )
}