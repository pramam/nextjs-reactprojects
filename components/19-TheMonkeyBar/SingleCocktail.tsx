import Link from 'next/link'
import { useGlobalMonkeyContext } from './Context'
import Layout from './Layout'
import { homeurl } from './definitions'

export interface IProps {
    id: string | string[]
}
// The flow comes here from /themonkeybar/cocktail/[id]/index.tsx
// It feels cumbersome to redirect that to a SingleCocktailLanding page first,
// (the props will need to be passed in to the Landing page).
// That is why this is preferred, have <Layout> here
export default function SingleCocktail({ id }: IProps) {
    return (
        <Layout>
            {/* The Link ensures that home does not get refreshed with data when you go back */}
            <Link href={homeurl}>
                <a>
                    <p className="mt-5 mb-5 capitalize text-center text-base font-monkeylogo text-monkey-gold font-semibold">Back Home</p>
                </a>
            </Link>
            Single Cocktail for id {id}
        </Layout >
    )
}