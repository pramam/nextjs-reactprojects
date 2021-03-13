import allprojectsData from '../../data/allprojects.json'
import ProjectNavbarBlog from './ProjectNavbarBlog'

export default function BlogHeader({ id }) {
    const entry = allprojectsData.find(item => item.id === id)
    return (
        <div>
            <ProjectNavbarBlog
                projectId={id}
                textColor="text-gray-900"
            />

            Project {id} has title {entry.name}
        </div>
    )
}