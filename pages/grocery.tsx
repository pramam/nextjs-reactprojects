import GroceryList from '../components/13-GroceryList/GroceryList'
import ProjectNavbarContainer from '../components/projects/ProjectNavbarContainer'

export default function DisplayGrocery() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-500">
            <ProjectNavbarContainer
                projectName="Grocery List"
                textColor="text-gray-50"
            />
            <GroceryList />
        </div>
    )
}