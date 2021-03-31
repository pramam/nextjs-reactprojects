import SVGSearch from '../svgicons/SVGSearch'
import { useGlobalMonkeyContext } from './Context'

export default function SearchForm() {
    const { searchTerm, setSearchTerm } = useGlobalMonkeyContext()

    return (
        <div className="mt-10 mx-auto max-w-md md:max-w-2xl shadow-lg flex justify-center">
            <div className="flex flex-col justify-left w-full">
                <h1 className="mt-5 ml-5 text-left font-monkeylogo text-monkey-gold font-semibold">search your favorite cocktail</h1>
                <div className="max-w-2xl">
                    <form className="m-5">
                        <label htmlFor="search"></label>
                        <SVGSearch css="h-6 w-6 text-monkey-gold" />
                        <input type="text"
                            className="w-full"
                            id="search"
                            name="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}
