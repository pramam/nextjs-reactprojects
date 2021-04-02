import CocktailCardFlex2 from './CocktailCardFlex2'
import { useGlobalMonkeyContext } from './Context'

// This component uses flex box for sm: and grid for < sm:
// Equal Height Cards solution from here:
// https://mono.software/2020/07/29/equal-height-cards-with-flexbox/
// Typo where inner_card is placed in article. 
// Codepen has correct code: https://codepen.io/IvanMono/pen/RYPzgw
// <Outer> flex flex-row flex-wrap w-full
//  <Inner> flex flex-row w-full sm:w-1/2 md:w-1/3 my-2
//    <Card> flex flex-col w-full
//      <header/>
//      <Long content> flex-grow (only 1 long content)
//      <footer/>
//    </Card>
//  </Inner>
//
//  <Inner> flex flex-row w-full sm:w-1/2 md:w-1/3 my-2
//    <Card> flex flex-col w-full
//      <header>
//      <Long content> flex-grow (only 1 long content)
//      <footer>
//    </Card>
//  </Inner>
//  ...
// </Outer>

export default function CocktailsFlex2() {
    const { cocktails, loading } = useGlobalMonkeyContext()

    return (
        <div>
            <h1 className="mt-5 pb-10 font-monkeylogo text-2xl text-center font-semibold text-monkey-gold">Cocktails</h1>
            <p className="text-center">
                {loading ? `Loading` : ``}
            </p>

            <div className="container mx-auto">
                {/* Outer:  */}
                <ul className="flex flex-row flex-wrap w-full">
                    {cocktails.map((obj, index) => {
                        return (
                            // Inner 
                            <li key={index} className="flex flex-row w-full sm:w-1/2 md:w-1/3 my-2" >
                                <CocktailCardFlex2 {...obj} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}