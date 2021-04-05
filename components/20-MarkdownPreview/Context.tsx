import { useState, useContext } from 'react'
import React from 'react'

const MarkdownContext = React.createContext(null)

const MarkdownProvider = ({ children }) => {
    const [markdown, setMarkdown] = useState('')

    return (
        <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
            {children}
        </MarkdownContext.Provider>
    )

}

const useGlobalMarkdownContext = () => {
    return useContext(MarkdownContext)
}

export { MarkdownContext, MarkdownProvider, useGlobalMarkdownContext }