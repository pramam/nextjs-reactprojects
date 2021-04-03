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
                console.log(item)
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
                    name: item.strDrink,
                    category: item.strCategory,
                    alcoholic: item.strAlcoholic,
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
            Single Cocktail for id {id}
            <h1>{singleCocktail.name}</h1>
        </Layout >
    )
}