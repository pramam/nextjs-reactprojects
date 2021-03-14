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
                    <Button text="Sign in" />
                </div>
            </div>
        </div>
    )
}