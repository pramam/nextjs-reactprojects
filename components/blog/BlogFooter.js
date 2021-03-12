import allprojectsData from '../../data/allprojects.json'

export default function BlogFooter({ id }) {
    const entry = allprojectsData.find(item => item.day === id)
    return (
        <div>
            Day {id} has title {entry.name}
        </div>
    )
}