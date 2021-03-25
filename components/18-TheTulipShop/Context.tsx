import { useState, useEffect, useContext, useReducer } from 'react'
import React from 'react'
import inventoryData from './tulipinventory.json'
import { reducer } from './reducer'

const TulipContext = React.createContext(null)

const initialCartState = {
    cartItems: inventoryData,
    totalCount: 0,
    totalPrice: 0,
    displayCategory: "All"
}

const TulipProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [cartState, cartDispatch] = useReducer(reducer, initialCartState)

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(`MenuHandler, isMenuOpen: ${isMenuOpen}`)
    }

    const openMenu = () => {
        setIsMenuOpen(true)
        console.log(`openMenu, isMenuOpen: ${isMenuOpen}`)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
        console.log(`closeMenu, isMenuOpen: ${isMenuOpen}`)
    }

    const decrementCartItemCount = (id) => {
        // once you dispatch your action, you need to handle it in reducer
        console.log(`decrementCountHandler: id: ${id}`)
        cartDispatch({ type: "DECREMENT_COUNT", payload: { id } })
        // getTotals()
    }

    const incrementCartItemCount = (id) => {
        // once you dispatch your action, you need to handle it in reducer
        console.log(`incrementCartItemCount: id: ${id}`)
        cartDispatch({ type: "INCREMENT_COUNT", payload: { id } })
        // getTotals()
    }

    // It might be better to call getTotals in a useEffect every time the cart changes
    // instead of finding all the places where the cart changes

    useEffect(() => {
        cartDispatch({ type: "GET_TOTALS" })
    }, [cartState.cartItems])

    // const getTotals = () => {
    //     cartDispatch({ type: "GET_TOTALS" })
    // }

    // I do not want to 'reduce' the inventory. I just want to filter out what I need,
    // so it looks like this cannot be done through the dispatcher as the returned state updates
    // the global cartState.

    const getItemsInCart = () => {
        // cartDispatch({ type: "GET_TOTALS" })
        const incart = cartState.cartItems.filter(item => item.quantity > 0)
        console.log(`getItemsInCart: len: ${incart.length}`)
        return incart
    }

    const setCategory = (category) => {
        cartDispatch({ type: "SET_CATEGORY", payload: { category } })
    }

    const getCategory = () => {
        if (cartState.displayCategory === "All")
            return cartState.cartItems
        else {
            const categoryItems = cartState.cartItems.filter(item => item.category === cartState.displayCategory)
            return categoryItems
        }
    }

    useEffect(() => {
    }, [cartState.displayCategory])

    return (
        <TulipContext.Provider
            value={{
                isMenuOpen,
                menuHandler,
                openMenu,
                closeMenu,
                ...cartState,// cartItems gets put in the context
                decrementCartItemCount,
                incrementCartItemCount,
                // getTotals,
                getItemsInCart,
                setCategory,
                getCategory
            }}>
            {children}
        </TulipContext.Provider>
    )
}

const useGlobalTulipContext = () => {
    return useContext(TulipContext)
}

export { TulipContext, TulipProvider, useGlobalTulipContext }