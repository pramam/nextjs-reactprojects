import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from './Layout'
import Loading from './Loading'
import { homeurl, searchByIDUrl } from './definitions'

export interface IProps {
    id: string | string[]
}
// The flow comes here from /themonkeybar/cocktail/[id]/index.tsx
// It feels cumbersome to redirect that to a SingleCocktailLanding page first,
// (the props will need to be passed in to the Landing page).
// That is why this is preferred, have <Layout> here
export default function SingleCocktail({ id }: IProps) {
    const [loading, setLoading] = useState(true)
    const [singleCocktail, setSingleCocktail] = useState(null)

    const fetchCocktail = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${searchByIDUrl}${id}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                console.log(`Got single cocktail ${drinks.length} `)
                const item = drinks[0]
                // console.log(item)
                const ingredients = [
                    item.strIngredient1,
                    item.strIngredient2,
                    item.strIngredient3,
                    item.strIngredient4,
                    item.strIngredient5,
                    item.strIngredient6,
                ]
                const newCocktail = {
                    id: id,
                    image: item.strDrinkThumb,
                    name: item.strDrink,
                    category: item.strCategory,
                    alcoholic: item.strAlcoholic,
                    glass: item.strGlass,
                    instructions: item.strInstructions,
                    ingredients: ingredients
                }
                setSingleCocktail(newCocktail)
            }
            else {
                console.log(`Did not get single cocktail, bad id ${id}`)
                setSingleCocktail(null)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCocktail()
    }, [id])

    if (loading) {
        return (
            <Layout>
                <Loading />
            </Layout>
        )
    }

    if (!singleCocktail) {
        return (
            <Layout>
                <Link href={homeurl}>
                    <a>
                        <p className="mt-5 mb-5 capitalize text-center text-base font-monkeylogo text-monkey-gold font-semibold">Back Home</p>
                    </a>
                </Link>
                <h2 className="text-center mt-5 mb-5 text-xl font-monkeylogo text-monkey-gold font-semibold">No cocktail to display</h2>
            </Layout>
        )
    }

    return (
        <Layout>
            {/* The Link ensures that home does not get refreshed with data when you go back */}
            <Link href={homeurl}>
                <a>
                    <p className="mt-5 mb-5 capitalize text-center text-base font-monkeylogo text-monkey-gold font-semibold">Back Home</p>
                </a>
            </Link>
            <h1 className="text-center mt-5 mb-5 text-xl font-monkeylogo text-monkey-gold font-semibold">{singleCocktail.name}</h1>
            <section className="container mx-auto sm:max-w-2xl">
                <div className="flex flex-col mx-5 sm:flex-row lg:mt-10">
                    <img src={singleCocktail.image}
                        alt={singleCocktail.name}
                        className="w-full sm:w-1/2 rounded-md"
                    />
                    <div className="flex flex-col justify-between w-full sm:w-1/2">
                        <div className="mt-5 sm:mt-0 ml-5 flex flex-row justify-space-between">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Name
                            </h3>
                            <p className="w-1/2 text-left">{singleCocktail.name}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 ml-5 flex flex-row">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Category
                            </h3>
                            <p className="w-1/2 text-left">{singleCocktail.category}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 ml-5 flex flex-row">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Alcoholic
                            </h3>
                            <p className="w-1/2 text-left">{singleCocktail.alcoholic}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 ml-5 flex flex-row">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Glass
                            </h3>
                            <p className="w-1/2 text-left">{singleCocktail.glass}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 ml-5 flex flex-row">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Instructions
                            </h3>
                            <p className="w-1/2 text-left">{singleCocktail.instructions}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 ml-5 flex flex-row">
                            <h3 className="flex-grow w-1/2 capitalize text-left text-base font-monkeylogo text-monkey-gold font-semibold">
                                Ingredients
                            </h3>
                            <ul className="w-1/2 flex flex-wrap">
                                {singleCocktail.ingredients.map((item, index) => {
                                    return (
                                        item ?
                                            <li key={index}>
                                                {item}&nbsp;
                                        </li> : null

                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}