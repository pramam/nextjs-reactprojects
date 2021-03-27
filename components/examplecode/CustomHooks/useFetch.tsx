import { useState, useEffect, useCallback } from 'react'


export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    // Previously this would change every single time the state variable products 
    // changed, so we couldn't add getProducts to useEffect
    // const getProducts = async () => {
    //     const response = await fetch(url)
    //     const products = await response.json()
    //     setProducts(products)
    //     setLoading(false)
    // }

    // now we only change getProducts when url changes
    const getProducts = useCallback(async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }, [url])

    // so now I can add getProducts to the dependency array as it changes only
    // when url changes. It will not result in an infinite loop.
    useEffect(() => {
        getProducts()
    }, [url, getProducts]) // if I add getProducts here in the dependency array I will get an infinite loop
    return { loading, products }
}