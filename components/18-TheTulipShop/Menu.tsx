import SVGMenu from '../svgicons/SVGMenu'
import SVGX from '../svgicons/SVGMenu'
import { useGlobalTulipContext } from './Context'

export default function Menu() {
    const { isMenuOpen, openSidebar } = useGlobalTulipContext()

    // const common_props = "z-0 fixed ml-2 sm:ml-5 md:ml-10 lg:ml-10 mt-2 sm:mt-5 md:mt-7 lg:mt-7 lg:mr-7  focus:outline-none border border-transparent animate animate-expandcontract"
    // Do not allow operation of Menu if Modal is open
    // const gray_out_function_props = "pointer-events-none"

    return (
        <div className="flex flex-col justify-center ml-3 md:ml-10">
            <button type="button"
                className="focus:outline-none border border-transparent"
                onClick={openSidebar}>
                {isMenuOpen ? <SVGX css="h-10 w-10 text-yellow-50" />
                    : <SVGMenu css="h-10 w-10 text-yellow-50" />
                }
            </button>
        </div>)
}