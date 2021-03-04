import GroceryList from '../components/13-GroceryList/GroceryList'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

export default function DisplayGrocery() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-500">
            <ProjectNavbarContainerSimple
                projectName="Grocery List"
                textColor="text-gray-50"
            />
            <GroceryList />
        </div>
    )
}