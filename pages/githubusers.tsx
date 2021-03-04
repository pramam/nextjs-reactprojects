import GithubUsers from "../components/2-Github/GithubUsers";
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function githublanding() {
    return (
        <div className="min-h-screen bg-indigo-50">
            <ProjectNavbarContainerSimple
                projectName="Github Users"
                textColor="text-gray-500"
            />
        <GithubUsers />
        </div>
    )
}