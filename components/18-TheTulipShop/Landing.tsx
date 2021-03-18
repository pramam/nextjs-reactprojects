import tulipphotos from './tulipphotos.json'

export default function Landing() {
    return (
        <div>
            <div className="grid h-1/5">
                <h1 className="font-tuliplogo text-yellow-50 text-center py-10 text-6xl"> The Tulip Shop</h1>
            </div>
            <div className="grid grid-cols-1 relative">
                {/* Putting text over image: https://www.youtube.com/watch?v=Zo1JtXnLDdA  */}
                <img
                    className="absolute inset-0 object-cover w-full h-96"
                    src={tulipphotos[0].img}
                    alt={tulipphotos[0].img}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
                <div className="flex items-center justify-center relative transform -translate-y-5 h-96 text-center">
                    <span className="border-4 justify-center border-yellow-50 px-20 py-8 text-yellow-50 uppercase text-center text-5xl tracking-wider">
                        Bring Beauty Inside
                    </span>
                </div>
                <div className="flex items-center justify-center relative transform -translate-y-24 text-center">
                    <span className="border justify-center border-yellow-50 px-8 py-2 text-yellow-50 text-lg uppercase text-center tracking-widest">Shop now</span>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex-1 max-w-4xl mx-auto p-10">
                    <ul className="grid grid-cols-12 gap-x-3 gap-y-4 grid-flow-row">
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full bg-yellow-50 opacity-80"
                                src={tulipphotos[1].img}
                                alt={tulipphotos[1].img}
                            />
                        </li>
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full opacity-80"
                                src={tulipphotos[2].img}
                                alt={tulipphotos[2].img}
                            />
                        </li>
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full opacity-80"
                                src={tulipphotos[3].img}
                                alt={tulipphotos[3].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[4].img}
                                alt={tulipphotos[4].img}
                            />
                        </li>
                        <li className="col-span-6">
                            <img
                                className="object-cover h-112 w-full opacity-80"
                                src={tulipphotos[5].img}
                                alt={tulipphotos[5].img}
                            />
                        </li>
                        <li className="col-span-6">
                            <img
                                className="object-cover h-112 w-full opacity-80"
                                src={tulipphotos[6].img}
                                alt={tulipphotos[6].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[7].img}
                                alt={tulipphotos[7].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[8].img}
                                alt={tulipphotos[8].img}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}