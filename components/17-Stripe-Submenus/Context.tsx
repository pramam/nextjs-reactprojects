import { useState, useContext } from 'react'
import React from 'react'

const StripeContext = React.createContext(null)

const StripeProvider = ({ children }) => {
    // sidebar is connected to the Menu button
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return (
        <StripeContext.Provider
            value={{
                "hello": "world",
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu
            }}
        >
            {children}
        </StripeContext.Provider>
    )
}

const useGlobalStripeContext = () => {
    return useContext(StripeContext)
}

export { StripeContext, StripeProvider, useGlobalStripeContext }