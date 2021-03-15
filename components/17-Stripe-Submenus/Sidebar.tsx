import SVGX from '../svgicons/SVGX'
import { useGlobalStripeContext } from './Context'
import Button from './Button'

export default function Sidebar() {
    const { closeSidebar } = useGlobalStripeContext();

    return (
        <div className="bg-gray-300 bg-opacity-70 fixed  z-20 pointer-events-auto w-full min-h-screen">
            <div className="flex justify-center z-20">
                {/* <div className="relative w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-32 sm:mt-32 md:mt-40 shadow-lg bg-gray-50 rounded-md"> */}
                <div className="relative w-11/12 h-11/12 mt-5 sm:mt-5 md:mt-10 shadow-lg bg-gray-50 rounded-md">
                    {/* <div className="flex flex-row justify-end"> */}
                    <div className="flex flex-col">
                        <div className="flex justify-end mt-2 mr-2">
                            <button onClick={closeSidebar}
                                className="mt-3 mr-3 focus:outline-none border border-transparent">
                                <SVGX css="mt-1.5 h-8 w-8 text-red-700" />
                            </button>
                        </div>
                        <p className="flex text-center mx-auto mt-10 text-3xl">Sidebar Content</p>
                        <p className="flex text-center mx-auto mt-10 text-3xl">Sidebar Content</p>

                        {/* List of items and Sign in Button  */}
                        <span className="flex justify-center">
                            <Button text="Sign in" />
                        </span>
                    </div>
                    {/* <div className="absolute mt-2">
                        <button onClick={closeSidebar}
                            className="mt-5 md:mt-7 mr-5 focus:outline-none border border-transparent">
                            <SVGX css="mt-1.5 h-8 w-8 text-red-700" />
                        </button>
                    </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}