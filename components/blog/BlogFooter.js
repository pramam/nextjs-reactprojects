import allprojectsData from '../../data/allprojects.json'

export default function BlogFooter({ id }) {
    const entry = allprojectsData.find(item => item.id === id)
    return (
        <div>
            Project {id} has title {entry.name}
        </div>
    )
}