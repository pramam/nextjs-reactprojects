import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from '../CustomHooks/useFetch'
import { IElem } from './definitions'

const url = "https://course-api.com/javascript-store-products"

// every time props or state changes, component re-renders

function index() {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)

    return (
        // <div>
        //     <h1 className="text-2xl text-center m-4">useMemo, useCallback Example</h1>
        //     <div className="flex justify-center flex-col">
        //         <h1 className="flex justify-center">Count : {count}</h1>
        //         <button
        //             className="flex justify-center focus:outline-none bg-blue-500 text-white"
        //             onClick={() => setCount(prev => prev + 1)}>
        //             <span className="inline-block">Increase Count</span>
        //         </button>

        //     </div>

        // </div>

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
            </div>
            <div className="flex justify-center">
                <BigList products={products} />

            </div>
        </div>

    )
}


// export interface IElem {
//     id: number
// }

export interface IProps {
    products: IElem[]
}

const BigList = ({ products }: IProps) => {
    useEffect(() => {
        console.log(`BigList called`)
    })
    return (
        <section>
            {products.map(obj => {
                return <SingleProduct key={obj.id} {...obj} />
            })}
        </section>
    )
}

const SingleProduct = ({ fields }) => {
    useEffect(() => {
        console.count(`SingleProduct called`)
    })
    const { name, price, image } = fields
    const imageurl = image[0].url

    return (
        <article className="mb-5">
            <img className="h-80 w-80" src={imageurl} alt={name} />
            <div className="flex flex-row justify-between">
                <h4 className="text-xl font-semibold capitalize">{name}</h4>
                <p>${price}</p>
            </div>
        </article>
    )
}
export default index
