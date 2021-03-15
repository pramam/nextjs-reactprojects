import SVGLogo from './svgimages/SVGLogo'
import Button from './Button'
import SVGMenu from '../svgicons/SVGMenu'
import { useGlobalStripeContext } from './Context'

export default function Navbar() {
    const { openSidebar } = useGlobalStripeContext();

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <h1 className="mt-8 ml-10 sm:ml-16"><SVGLogo /></h1>
                <ul className="hidden text-white w-5/12 mt-10 lg:flex lg:flex-row">
                    <li className="text-xl font-semibold mr-8">Products</li>
                    <li className="text-xl font-semibold mr-8">Use cases</li>
                    <li className="text-xl font-semibold mr-8">Developers</li>
                    <li className="text-xl font-semibold mr-8">Company</li>
                    {/* <li className="text-xl font-semibold mr-8">Pricing</li> */}
                </ul>
                <div className="hidden lg:flex mt-10 mr-1/12">
                    <Button text="Sign in" />
                </div>
                <div className="lg:hidden mt-8 mr-5">
                    <button type="button"
                        className="focus:outline-none border-2 border-gray-800 rounded-md transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out"
                        onClick={openSidebar}
                    >
                        <SVGMenu css="h-12 w-12 text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    )
}