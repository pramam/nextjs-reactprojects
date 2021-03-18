import tulipphotos from './tulipphotos.json'

export default function index() {
    return (
        <div className="min-h-screen relative bg-gray-900">
            <div className="grid h-1/5">
                <h1 className="text-yellow-50 text-center py-10 text-4xl"> The Tulip Shop</h1>
            </div>
            <div className="grid grid-cols-1">
                <img
                    className="w-full h-96 object-cover opacity-80"
                    src={tulipphotos[0].img}
                />
                <div className="flex justify-center transform -transition-y-20 transition-x-1/2 absolute text-center">
                    <span className="border-2 justify-center border-yellow-50 text-yellow-50 uppercase text-center">
                        Bring Beauty Inside
                    </span>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex-1 max-w-4xl mx-auto p-10">
                    <ul className="grid grid-cols-12 gap-x-3 gap-y-4 grid-flow-row">
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full bg-yellow-50 opacity-80"
                                src={tulipphotos[1].img}
                            />
                        </li>
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full opacity-80"
                                src={tulipphotos[2].img}
                            />
                        </li>
                        <li className="col-span-4">
                            <img
                                className="object-cover h-80 w-full opacity-80"
                                src={tulipphotos[3].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[4].img}
                            />
                        </li>
                        <li className="col-span-6">
                            <img
                                className="object-cover h-112 w-full opacity-80"
                                src={tulipphotos[5].img}
                            />
                        </li>
                        <li className="col-span-6">
                            <img
                                className="object-cover h-112 w-full opacity-80"
                                src={tulipphotos[6].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[7].img}
                            />
                        </li>
                        <li className="col-span-12">
                            <img
                                className="object-cover h-72 w-full opacity-80"
                                src={tulipphotos[8].img}
                            />
                        </li>
                    </ul>
                </div>
            </div>


        </div >
    )
}