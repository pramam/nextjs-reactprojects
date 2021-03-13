import allprojectsData from '../../data/allprojects.json'
import CheckinNavbarBlog from './CheckinNavbarBlog'

export default function BlogFooter({ id }) {
    const entry = allprojectsData.find(item => item.id === id)
    return (
        <CheckinNavbarBlog
            projectId={id}
            textColor="text-gray-900"
        />
    )
}