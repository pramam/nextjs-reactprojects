export type State = {
    people: {
        id: string,
        name: string
    }[]
    isModalOpen: boolean
    modalContent: string
}
export type Action =
    | { type: 'ADD_ITEM', payload: { id: string, name: string } }
    | { type: 'NO_VALUE' }
    | { type: 'DELETE_ITEM', payload: { id: string, name: string } }
