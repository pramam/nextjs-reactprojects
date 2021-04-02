import SVGSearch from '../svgicons/SVGSearch'
import { useGlobalMonkeyContext } from './Context'

export default function SearchForm() {
    const { searchTerm, setSearchTerm } = useGlobalMonkeyContext()

    return (
        <div className="mt-10 mx-auto max-w-md md:max-w-2xl shadow-lg flex justify-center">
            <div className="flex flex-col justify-left w-full">
                <h1 className="mt-5 ml-5 text-left text-lg font-monkeylogo text-monkey-gold font-semibold">search your favorite cocktail</h1>
                <div className="max-w-2xl">
                    <form className="mt-2 mb-5 ml-5 mr-5">
                        <label htmlFor="search"></label>
                        <div className="flex flex-row border-2 border-monkey-gold">
                            <i className="flex items-center">
                                <SVGSearch css="ml-1 h-6 w-6 text-monkey-gold" />
                            </i>
                            <input type="text"
                                className="w-full border border-transparent border-opacity-0 focus:ring-transparent focus:border-transparent "
                                id="search"
                                name="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
