import { useState, useEffect, useCallback } from 'react'


export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [url]) // if I add products here in the dependency array I will get an infinite loop
    return { loading, products }
}