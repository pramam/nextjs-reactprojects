import { useState, useEffect, useCallback } from 'react'
import React from 'react'
import { useContext } from 'react'
import { searchAPIUrl } from './definitions'
import { useFetch } from '../examplecode/CustomHooks/useFetch'

const MonkeyContext = React.createContext(null)

const MonkeyProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [cocktails, setCocktails] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // Everytime the url changes, the code of fetch drinks will change,
    // so wrap it in useCallback
    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${searchAPIUrl}${searchTerm}`)
            const data = await response.json()
            // console.log(JSON.stringify(data, null, 2))
            const { drinks } = data
            if (drinks) {
                console.log(`Got ${drinks.length} drinks`)
                const newCocktails = drinks.map((obj, index) => {
                    const { idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass } = obj
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        alcoholic: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails)
                // console.log(cocktails)
            } else {
                console.log(`TheMonkeyBar: No cocktails data returned`)
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <MonkeyContext.Provider value={{
            loading, cocktails, searchTerm, setSearchTerm
        }}>
            {children}
        </MonkeyContext.Provider>
    )
}

const useGlobalMonkeyContext = () => {
    return useContext(MonkeyContext)
}

export { MonkeyContext, MonkeyProvider, useGlobalMonkeyContext }