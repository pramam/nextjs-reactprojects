import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import useFetch from '../CustomHooks/useFetch'
import { IElem } from './definitions'

const url = "https://course-api.com/javascript-store-products"

// every time props or state changes, component re-renders
// React.memo is when the props change
// useMemo is specifically for the values
function index() {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    // useCallback: Has the value of the function changed. If it hasn't changed then
    // I don't need to re-create the function from scratch. If the value of the function
    // has changed, I will need to recreate the function one more time.
    // Dependency array: Each and every time I update cart, I also create this function
    // Now, the next question is I want to rerender only the SingleProduct which has triggered
    // a re-render
    // Every time I addToCart, SingleProduct gets refreshed, but every time I incremement {count}
    // SingleProduct does not get refreshed.
    const addToCart = useCallback(() => {
        console.log(`Cart: ${cart}`)
        setCart(prev => prev + 1) // if this is cart+1, then `cart` doesn't even change
    }, [cart])


    // If I don't pass anything in the dependency array, console.log will show 0
    // even though the `cart` useState variable is changing.
    // Cart: {cart} changes, but console.log says 0, it is saving the original state,
    // and this means addToCart did not change.
    // const addToCart = useCallback(() => {
    //     console.log(`Cart: ${cart}`)
    //     setCart(prev => prev + 1) // if this is cart+1, then `cart` doesn't even change
    // }, [])

    // Every time count changes, it recomputes this function and BigList and SingleProduct
    // get re-rendered. This happens even if I don't touch Add To Cart
    // const addToCart = () => {
    //     setCart(prev => prev + 1)
    // }

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col mb-2">
                <h1 className="text-2xl text-center m-7">useMemo useCallback Example</h1>
                <h4 className="text-xl text-center capitalize mr-3">Count : {count}</h4>
                <span className="m-5 flex justify-center">
                    <button className="px-5 bg-blue-500 text-white focus:outline-none border border-transparent rounded-md"
                        onClick={() => setCount(prev => prev + 1)}>
                        Add Count
                    </button>
                </span>
                <h4 className="m-7 text-xl text-center capitalize mr-3">Cart : {cart}</h4>
            </div>
            <div className="flex justify-center">
                <BigList products={products} addToCart={addToCart} />

            </div>
        </div>

    )
}


export interface IProps {
    products: IElem[]
    addToCart: () => void
}

// Every time prop changes, component re-renders, but in this case it was re-rendering
// whenever count, which is in useState, changed. So it re-rendered BigList which
// re-rendered SingleProduct.
// React.memo is checking, memoizing(caching) the value of the props.
// If {products} did not change, then we do not trigger a re-render
//
// Once we add addToCart, it re-renders every time addToCart changes, which is a function
// that is re-created every single time.
const BigList = React.memo(({ products, addToCart }: IProps) => {
    useEffect(() => {
        console.log(`BigList called`)
    })
    return (
        <section>
            {products.map(obj => {
                return <SingleProduct key={obj.id} {...obj} addToCart={addToCart} />
            })}
        </section>
    )
})

const SingleProduct = ({ fields, addToCart }) => {
    useEffect(() => {
        console.count(`SingleProduct called`)
    })
    const { name, price, image } = fields
    const imageurl = image[0].url

    return (
        <article className="flex flex-col mb-5">
            <img className="h-80 w-80" src={imageurl} alt={name} />
            <div className="flex flex-row justify-between">
                <h4 className="text-xl font-semibold capitalize">{name}</h4>
                <p>${price}</p>
            </div>
            <span className="mt-4 mb-6 flex justify-center">
                <button className="px-3 bg-blue-500 text-white focus:outline-none border border-transparent rounded-md"
                    onClick={addToCart}
                >
                    Add To Cart
                </button>
            </span>
        </article>
    )
}
export default index
