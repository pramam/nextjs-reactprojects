const shoppingurl = "/thetulipshop/selections"
const homeurl = "/thetulipshop"
const shoppingcarturl = "/thetulipshop/cart"

// This holds the entire inventory and is used to display the /thetulipshop/selections page. 
// quantity is initialized to 0 from the json file
// As you increment/decrement the items in your cart, cartItems.quantity changes
// When quantity reaches 0, the item stays in cartItems since it is the inventory
export type CartStateType = {
    cartItems: {
        id: number,
        img: string,
        alt: string,
        price: number,
        quantity: number, // Number of items in your cart
        category: string
    }[],
    totalCount: number,
    totalPrice: number,
    displayCategory: string
}

export type CartActionType =
    | { type: 'INCREMENT_COUNT', payload: { id: number } }
    | { type: 'DECREMENT_COUNT', payload: { id: number } }
    | { type: 'GET_TOTALS' }
    | { type: 'SET_CATEGORY', payload: { category: string } }

export { shoppingurl, homeurl, shoppingcarturl }