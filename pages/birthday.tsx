import birthdayData from '../components/1-Birthday/birthdaydata.json'
import AllBirthdays from '../components/1-Birthday/AllBirthdays'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayBirthdays() {

    return (
        <div className="min-h-screen bg-pink-400">
            <ProjectNavbarContainerSimple
                projectId={2}
                textColor="text-gray-50"
                includeBlogs={false}
                fixed={false}
            />
        < AllBirthdays birthday_array={birthdayData} />
        </div>
    )
}