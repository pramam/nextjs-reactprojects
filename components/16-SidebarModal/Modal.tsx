import SVGX from '../svgicons/SVGX'

export default function Modal({ closeModalHandler }) {
    return (
        <div className="bg-gray-600 z-10 min-h-screen ">
            <div className="flex justify-center z-20">
                <div className="relative w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-32 sm:mt-32 md:mt-40 shadow-lg bg-gray-50 rounded-md">
                    <div className="flex flex-row justify-end">
                        <p className="flex justify-center py-20 sm:py-28 lg:py-40 mx-auto text-3xl">Modal Content</p>
                        <div className="absolute mt-2">
                            <button onClick={closeModalHandler}
                                className="mt-5 md:mt-7 mr-5 focus:outline-none border border-transparent">
                                <SVGX css="mt-1.5 h-8 w-8 text-red-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}