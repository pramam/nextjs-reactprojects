import GroceryList from '../components/13-GroceryList/GroceryList'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayGrocery() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-500">
            <ProjectNavbarContainerSimple
                projectId={13}
                textColor="text-gray-50"
                includeBlogs={false}
                fixed={false}
            />
            <GroceryList />
        </div>
    )
}