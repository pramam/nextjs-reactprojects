// Design inspiration: https://tailwindcomponents.com/component/nowruz1400-square-card
export default function CocktailCardFlex2({ id, name, image, alcoholic, glass }) {
    return (
        // Card
        <article className="flex flex-col w-full justify-center items-center mx-5 sm:mx-2 lg:mx-7 shadow-lg rounded-lg">  {/*border-b-4 border-monkey-gold */}
            <div className="relative">
                <img className="rounded-t-lg sm:w-full sm:object-cover sm:h-64 md:h-64 2xl:h-76"
                    src={image} alt={name} />
                <span className="absolute top-5 rounded-r-lg bg-monkey-charcoal text-monkey-gold font-semibold text-center py-2 px-4">{alcoholic}</span>
            </div>
            {/* Long content: h1, has flex-grow */}
            <h1 className="flex-grow flex-wrap text-center mx-2 bg-white font-monkeylogo font-semibold text-monkey-gold text-xl">{name}</h1>
            <p className="text-center sm:text-left mx-2 bg-white capitalize text-xl whitespace-nowrap ">{glass}</p>
            <footer>
                <button className="text-center mx-2 bg-white focus:outline-none border border-transparent">
                    <p className="mt-3 capitalize text-center text-base font-monkeylogo text-monkey-gold font-semibold">Details</p>
                </button>
            </footer>
        </article >
    )
}