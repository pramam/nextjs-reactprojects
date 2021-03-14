import SVGChevronRight from '../svgicons/SVGChevronRight'
import SVGLogo from './svgimages/SVGLogo'
import Button from './Button'

export default function Navbar() {
    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <h1 className="mt-8 ml-10"><SVGLogo /></h1>
                <ul className="text-white w-5/12 mt-10 flex flex-row">
                    <li className="text-xl font-semibold mr-8">Products</li>
                    <li className="text-xl font-semibold mr-8">Use cases</li>
                    <li className="text-xl font-semibold mr-8">Developers</li>
                    <li className="text-xl font-semibold mr-8">Company</li>
                    <li className="text-xl font-semibold mr-8">Pricing</li>
                </ul>
                <div className="mt-10 mr-1/12">
                    {/* <button className="text-xl px-4 py-2 text-white focus:outline-none border border-white rounded-md">
                        <div className="flex flex-row">
                            Sign In
                        <SVGChevronRight css="ml-1.5 mt-2 h-4 w-4" />
                        </div>
                    </button> */}
                    <Button text="Sign in" />
                </div>
            </div>
        </div>
    )
}