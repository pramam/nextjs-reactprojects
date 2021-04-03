import { useRef, useEffect } from 'react'
import SVGSearch from '../svgicons/SVGSearch'
import { useGlobalMonkeyContext } from './Context'

export default function SearchForm() {
    const { setSearchTerm } = useGlobalMonkeyContext()
    const formInputRef = useRef(null)

    const searchCocktail = () => {
        setSearchTerm(formInputRef.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(`Prevent Default`)
    }

    useEffect(() => {
        // console.log(`formInputRef ${formInputRef.current.value}`)
        formInputRef.current.focus()
    }, [])

    return (
        <section className="mt-10 mx-auto max-w-md md:max-w-2xl shadow-lg flex justify-center">
            <div className="flex flex-col justify-left w-full">
                <div className="max-w-2xl mt-5 mb-5">
                    <form className="mt-2 mb-5 ml-5 mr-5"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="search"
                            className="mt-5 mb-5 text-left text-lg font-monkeylogo text-monkey-gold font-semibold">
                            search your favorite cocktail
                        </label>
                        <div className="flex flex-row border-2 border-monkey-gold">
                            <i className="flex items-center">
                                <SVGSearch css="ml-1 h-6 w-6 text-monkey-gold" />
                            </i>
                            <input type="text"
                                className="w-full border border-transparent border-opacity-0 focus:ring-transparent focus:border-transparent"
                                id="search"
                                name="search"
                                ref={formInputRef}
                                onChange={searchCocktail}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
