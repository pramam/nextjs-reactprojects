import CocktailCard from './CocktailCard'
import { useGlobalMonkeyContext } from './Context'

export default function Cocktails() {
    const { cocktails, loading } = useGlobalMonkeyContext()

    return (
        <div>
            <h1 className="mt-5 pb-10 font-monkeylogo text-2xl text-center font-semibold text-monkey-gold">Cocktails</h1>
            <p className="text-center">
                {loading ? `Loading` : ``}
            </p>
            <ul className="mx-4 sm:mx-2 xl:mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cocktails.map((obj, index) => {
                    return (
                        <li key={index} className="col-span-1" >
                            <CocktailCard {...obj} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}