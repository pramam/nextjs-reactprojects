// Design inspiration: https://tailwindcomponents.com/component/nowruz1400-square-card
export default function CocktailCard({ id, name, image, alcoholic, glass }) {
    return (
        <div className="relative shadow-lg rounded-lg">
            <img className="rounded-t-lg"
                src={image} alt={name} />
            <span className="absolute top-5 rounded-r-lg bg-monkey-charcoal text-monkey-gold font-semibold text-center py-2 px-4">{alcoholic}</span>
            <div className="ml-2 mt-5 mr-2 pb-5 bg-white">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-monkeylogo font-semibold text-monkey-gold text-xl">{name}</h1>
                        <p className="capitalize text-xl whitespace-nowrap ">{glass}</p>
                    </div>
                    <button className="capitalize text-sm font-monkeylogo text-monkey-gold font-semibold focus:outline-none border border-transparent">
                        Details
                    </button>
                </div>
            </div>
        </div>

        // Inspiration Design code, not looking nice with my pictures
        // <>
        //         {/* component */ }
        // {/* <div className="min-h-screen bg-gray-400 flex justify-center items-center"> */ }
        // {/* <div className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer" style={{ backgroundImage: `url(${image})` }}> */ }
        // {/* <div className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer" style={{ backgroundImage: `url(${image})` }}>
        //             <div className="flex justify-between items-center ml-4 pr-8">
        //                 <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">{alcoholic}</div>
        //                 <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%</div>
        //             </div>
        //             <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
        //                 <h3 className="text-xl font-bold pb-2">{name}</h3>
        //                 <p className="truncate text-gray-500 text-sm">Nowruz is the Persian New Year, which begins on the Spring equinox, marking the first day of Farvardin, the first month of the Iranian solar calendar.</p>
        //                 <div className="flex justify-between items-center">
        //                     <span className="text-gray-400 text-xs">Have a nice year...</span>
        //                 </div>
        //             </div>
        //         </div> */}
        // {/* </div> */ }
        //     // </>
    )
}