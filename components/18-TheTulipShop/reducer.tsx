import { CartStateType, CartActionType } from './definitions'
import ShopItemCounter from './ShopItemCounter'

export const reducer = (state: CartStateType, action: CartActionType): CartStateType => {

    switch (action.type) {
        case 'INCREMENT_COUNT':
            console.log(`reducer: state: ${state}, action:${action.payload.id}`)
            let incrCart = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, cartItems: incrCart }

        case 'DECREMENT_COUNT':
            console.log(`reducer: state: ${state}, action:${action.payload.id}`)
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

        case 'GET_TOTALS':
            let { totalCount, totalPrice } =
                state.cartItems.reduce((acc, item) => {
                    const { price, quantity } = item
                    const itemTotal = price * quantity
                    acc.totalPrice += itemTotal
                    acc.totalCount += quantity
                    return acc
                }, { totalCount: 0.00, totalPrice: 0.00 })
            // const totalCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0)
            // const totalPrice = state.cartItems.reduce((acc, item) => acc + item.price, 0)
            // console.log(`GET_TOTALS: totalCount: ${totalCount}, totalPrice: ${totalPrice}`)

            return { ...state, totalCount, totalPrice }
        
        case 'SET_CATEGORY':
            const displayCategory = action.payload.category;
            console.log(`SET_CATEGORY: Set to ${displayCategory}`)
            return { ...state, displayCategory }
        
        case 'CLEAR_CART':
            let clearCart = state.cartItems.map((item) => {
                if (item.quantity > 0)
                    return { ...item, quantity: 0 }
                return item
            })
            console.log(`CLEAR_CART: Cart cleared`)
            return { ...state, cartItems: clearCart, totalCount: 0, totalPrice: 0 }
        default:
            throw new Error('No matching action type')
    }
}
