const shoppingurl = "/thetulipshop/selections"
const homeurl = "/thetulipshop"

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
        quantity: number // Number of items in your cart
    }[]
}

export type CartActionType =
    | { type: 'INCREMENT_COUNT', payload: { id: number } }
    | { type: 'DECREMENT_COUNT', payload: { id: number } }

export { shoppingurl, homeurl }