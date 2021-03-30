// Design inspiration: https://tailwindcomponents.com/component/nowruz1400-square-card
// Uses flexbox for sm: and grid for < sm:
export default function CocktailCardFlex({ id, name, image, alcoholic, glass }) {
    return (

        <div className="justify-center items-center mx-5 sm:mx-2 lg:mx-7 relative shadow-lg rounded-lg">  {/*border-b-4 border-monkey-gold */}
            <div className="">
                <img className="rounded-t-lg sm:w-full sm:object-cover sm:h-64 md:h-64 2xl:h-76"
                    src={image} alt={name} />
                <span className="absolute top-5 rounded-r-lg bg-monkey-charcoal text-monkey-gold font-semibold text-center py-2 px-4">{alcoholic}</span>
                <div className="flex flex-col flex-1 ml-2 mr-2 bg-white">
                    {/* <div className="flex flex-row justify-between"> */}
                    <div className="flex flex-col text-center sm:text-left">
                        <h1 className="flex-1 whitespace-nowrap truncate font-monkeylogo font-semibold text-monkey-gold text-xl">{name}</h1>
                        <p className="capitalize text-xl whitespace-nowrap ">{glass}</p>
                        <button className="focus:outline-none border border-transparent">
                            <p className="mt-3 capitalize text-center sm:text-left text-base font-monkeylogo text-monkey-gold font-semibold">Details</p>
                        </button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}