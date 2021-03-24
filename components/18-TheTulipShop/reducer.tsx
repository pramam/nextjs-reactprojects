import { CartStateType, CartActionType } from './definitions'

export const reducer = (state: CartStateType, action: CartActionType): CartStateType => {
    console.log(`reducer: state: ${state}, action:${action.payload.id}`)
    switch (action.type) {
        case 'INCREMENT_COUNT':
            let incrCart = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, cartItems: incrCart }

        case 'DECREMENT_COUNT':
            let decrCart = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    // console.log(`DECREMENT_COUNT: id: ${item.id} current qty: ${item.quantity}`)
                    // The Decrement button should be grayed out at 0 in the UI
                    if (item.quantity === 0)
                        throw Error(`DECREMENT_COUNT: Decrementing ${item.id} which is already 0`)
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            return { ...state, cartItems: decrCart }

        default:
            throw new Error('No matching action type')
    }
}
