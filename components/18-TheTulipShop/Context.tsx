import { useState, useContext } from 'react'
import React from 'react'

const TulipContext = React.createContext(null)

const TulipProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // const [showCart, setShowCart] = useState(false)

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(`MenuXHandler, isMenuOpen: ${isMenuOpen}`)
    }

    const openSidebar = () => {
        setIsMenuOpen(true)
        console.log(`openSidebar, isMenuOpen: ${isMenuOpen}`)
    }
    const closeSidebar = () => {
        setIsMenuOpen(false)
        console.log(`closeSidebar, isMenuOpen: ${isMenuOpen}`)
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
                openSidebar,
                closeSidebar
            }}>
            {children}
        </TulipContext.Provider>
    )
}

const useGlobalTulipContext = () => {
    return useContext(TulipContext)
}

export { TulipContext, TulipProvider, useGlobalTulipContext }