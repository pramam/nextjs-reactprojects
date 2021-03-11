import { useState } from 'react'
import React from 'react'
const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const openSidebar = () => {
        setMenuIsOpen(true)
        console.log("openSidebar")
    }
    const closeSidebar = () => {
        setMenuIsOpen(false)
        console.log("closeSidebar")
    }

    const openModal = () => {
        setShowModal(true)
        console.log("openModal")
    }

    const closeModal = () => {
        setShowModal(false)
        console.log("closeModal")
    }
    return (
        <AppContext.Provider
            value={{
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
                menuIsOpen,
                showModal
            }}
        >{children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }