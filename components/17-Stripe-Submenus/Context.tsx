import { useState, useEffect, useContext } from 'react'
import React from 'react'

const StripeContext = React.createContext(null)

const StripeProvider = ({ children }) => {
    // sidebar is connected to the Menu button
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [coords, setCoords] = useState({})
    const [navButtonToShow, setNavButtonToShow] = useState('')
    const [navButtonIndex, setNavButtonIndex] = useState(0)
    const [navPrevButtonIndex, setNavPrevButtonIndex] = useState(-1)
    const [secondTime, setSecondTime] = useState(false)

    useEffect(() => {
        // The first time the submenu is opened, set secondTime to true
        // Once secondTime is true, update navPrevButtonIndex in openSubmenu
        // navPrevButtonIndex != navButtonIndex => Submenu x-transition happens
        if (isSubmenuOpen)
            setSecondTime(true)
        console.log(`in useEffect: firstTime ${secondTime}`)
    }, [isSubmenuOpen])

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (label, labelindex, left, bottom, center) => {
        setCoords({ left, bottom, center })
        console.log(`openSubmenu, label: ${label} center: ${center}, bottom: ${bottom}`)
        setNavButtonToShow(label)
        // Don't set navPrevButtonIndex on first subMenuOpen, 
        // it will be -1, and navButtonIndex will be 0, triggering a Submenu Transition
        if (secondTime)
            setNavPrevButtonIndex(navButtonIndex)
        setNavButtonIndex(labelindex)
        console.log(`openSubmenu: prev: ${navPrevButtonIndex}, next: ${navButtonIndex}`)

        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        console.log(`closeSubmenu`)
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
                closeSubmenu,
                navButtonToShow,
                navButtonIndex,
                navPrevButtonIndex,
                coords
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