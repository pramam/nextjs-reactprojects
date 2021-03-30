import CocktailCardFlex from './CocktailCardFlex'
import { useGlobalMonkeyContext } from './Context'

// This component uses flex box for sm: and grid for < sm:
export default function CocktailsFlex() {
    const { cocktails, loading } = useGlobalMonkeyContext()

    return (
        <div>
            <h1 className="mt-5 pb-10 font-monkeylogo text-2xl text-center font-semibold text-monkey-gold">Cocktails</h1>
            <p className="text-center">
                {loading ? `Loading` : ``}
            </p>
            {/* <ul className="mx-4 sm:mx-2 xl:mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
            <div className="container mx-auto">
                <ul className="grid grid-cols-1 sm:flex flex-row flex-wrap">
                    {cocktails.map((obj, index) => {
                        return (
                            <li key={index} className="sm:max-w-1/2 md:max-w-1/3 my-2" >
                                <CocktailCardFlex {...obj} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}