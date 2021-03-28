import React from 'react'
import { useContext } from 'react'
const MonkeyContext = React.createContext(null)

const MonkeyProvider = ({ children }) => {

    return (
        <MonkeyContext.Provider value={{ "hello": "the monkey bar" }}>
            {children}
        </MonkeyContext.Provider>
    )
}

const useGlobalMonkeyContext = () => {
    return useContext(MonkeyContext)
}

export { MonkeyContext, MonkeyProvider, useGlobalMonkeyContext }