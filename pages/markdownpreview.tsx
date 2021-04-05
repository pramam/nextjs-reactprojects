import MarkdownPreview from '../components/20-MarkdownPreview'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayMarkdownPreview() {
    return (
        <div>
            <ProjectNavbarContainerSimple
                projectId={20}
                textColor="text-gray-900"
                includeBlogs={false}
                fixed={false}
            />
            <MarkdownPreview />
        </div>
    )
}