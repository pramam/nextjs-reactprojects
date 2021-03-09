import { State, Action } from './definitions'
// state right before the update, and the action
export const reducer = (state: State, action: Action): State => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, people: [...state.people, action.payload], isModalOpen: true, modalContent: `Item ${action.payload.name} Added` }
        case 'NO_VALUE':
            return { ...state, isModalOpen: true, modalContent: "Please enter a value" }
        case 'DELETE_ITEM':
            const removedPerson = state.people.find(item => item.id === action.payload.id)
            const newArray = state.people.filter(item => item.id != action.payload.id)
            return { people: [...newArray], isModalOpen: true, modalContent: `Removed ${removedPerson.name}` }
        default:
            throw new Error('No matching action type')
    }
}
