import { useState, useEffect, useContext, useReducer } from 'react'
import React from 'react'
import inventoryData from './tulipinventory.json'
import { reducer } from './reducer'

const TulipContext = React.createContext(null)

const initialCartState = {
    cartItems: inventoryData,
    totalCount: 0,
    totalPrice: 0
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
        getTotals()
    }

    const incrementCartItemCount = (id) => {
        // once you dispatch your action, you need to handle it in reducer
        console.log(`incrementCartItemCount: id: ${id}`)
        cartDispatch({ type: "INCREMENT_COUNT", payload: { id } })
        getTotals()
    }

    const getTotals = () => {
        cartDispatch({ type: "GET_TOTALS" })
    }
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
                getTotals
            }}>
            {children}
        </TulipContext.Provider>
    )
}

const useGlobalTulipContext = () => {
    return useContext(TulipContext)
}

export { TulipContext, TulipProvider, useGlobalTulipContext }