import SVGMenu from '../svgicons/SVGMenu'
import SVGX from '../svgicons/SVGX'
import { useGlobalTulipContext } from './Context'

// Menu button shows up only in md: and lower. This is controlled by
// `lg:hidden` in Navbar
export default function Menu() {
    const { isMenuOpen, menuHandler } = useGlobalTulipContext()

    return (
        <div className="flex flex-col justify-center ml-3 md:ml-10">
            <button type="button"
                className="focus:outline-none border border-transparent"
                onClick={menuHandler}>
                {isMenuOpen ?
                    <span aria-label="Close Menu">
                        <SVGX aria-hidden="true" css="h-8 w-8 md:h-10 md:w-10 text-yellow-50" />
                    </span>
                    :
                    <span aria-label="Menu">
                        <SVGMenu aria-hidden="true" css="h-8 w-8 md:h-10 md:w-10 text-yellow-50" />
                    </span>
                }
            </button>
        </div>)
}