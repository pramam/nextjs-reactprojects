import { useState, useContext } from 'react'
import React from 'react'
import inventoryData from './tulipinventory.json'

const TulipContext = React.createContext(null)

const TulipProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [inventory, setInventory] = useState(inventoryData)
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // const [showCart, setShowCart] = useState(false)

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

    // const openCart = () => {
    //     setShowCart(true)
    //     console.log("openCart")
    // }

    // const closeCart = () => {
    //     setShowCart(false)
    //     console.log("closeCart")
    // }

    return (
        <TulipContext.Provider
            value={{
                isMenuOpen,
                menuHandler,
                openMenu,
                closeMenu,
                inventory
            }}>
            {children}
        </TulipContext.Provider>
    )
}

const useGlobalTulipContext = () => {
    return useContext(TulipContext)
}

export { TulipContext, TulipProvider, useGlobalTulipContext }