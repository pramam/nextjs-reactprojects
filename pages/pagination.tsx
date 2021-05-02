import Pagination from '../components/21-Pagination'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayPagination() {
    return (
        <div>
            <ProjectNavbarContainerSimple
                projectId={21}
                textColor="text-green-400"
                includeBlogs={false}
                fixed={false}
            />
            <Pagination />
        </div>
    )

}