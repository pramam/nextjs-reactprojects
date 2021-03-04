import GithubUsers from "../components/2-Github/GithubUsers";
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function githublanding() {
    return (
        <div className="min-h-screen bg-indigo-50">
            <ProjectNavbarContainer
                projectName="Github Users"
                textColor="text-gray-500"
            />
        <GithubUsers />
        </div>
    )
}