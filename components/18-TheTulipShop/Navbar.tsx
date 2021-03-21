import { useGlobalTulipContext } from './Context'
import SVGX from '../svgicons/SVGX'
import SVGMenu from '../svgicons/SVGMenu'
import Menu from './Menu'
import Logo from './Logo'
import SVGShoppingCart from '../svgicons/SVGShoppingCart'
// import Link from 'next/link'
// import { homeurl } from './definitions'

export interface IProps {
    navheight: string
}

export default function Navbar({ navheight }: IProps) {
    const { isMenuOpen, openSidebar } = useGlobalTulipContext()

    // fixed left-0 right-0 makes it centered and fixed; inset-x-0 also centers it
    // To work with translate: 
    //      - inset-x-0 top-0 removed
    //      - left-0 right-0 added 
    const nav_common_props = "z-50 bg-gray-900 fixed left-0 right-0 opacity-100 flex items-center justify-center"
    return (
        <div className={`${nav_common_props} ${navheight}`}>
            <div className="w-full">
                <div className="flex flex-row justify-between lg:hidden">
                    {/* <div className="flex flex-col justify-center ml-3 md:ml-10">
                        <button type="button"
                            className="focus:outline-none border border-transparent"
                            onClick={openSidebar}>
                            {isMenuOpen ? <SVGX css="h-10 w-10 text-yellow-50" />
                                : <SVGMenu css="h-10 w-10 text-yellow-50" />
                            }
                        </button>
                    </div> */}
                    <Menu />
                    {/* <div className="flex flex-col justify-center items-center">
                        <Link href={homeurl}>
                            <a>
                                <h1 className="font-tuliplogo text-yellow-50 text-center py-6 lg:py-4 text-4xl sm:text-5xl lg:text-6xl"> The Tulip Shop</h1>
                            </a>
                        </Link>
                        <h2 className="hidden lg:block text-base">
                            <div className="flex flex-row mb-2">
                                <div className="mr-3">Reds</div>
                                <div className="mr-3">Multicolors</div>
                                <div className="mr-3">Bunches</div>
                                <div className="mr-3">Weddings</div>
                                <div className="">Subscribe</div>
                            </div>
                        </h2>
                    </div> */}
                    <Logo />
                    <div className="flex flex-col justify-center mr-3 lg:mr-10">
                        <SVGShoppingCart css="h-10 w-10 text-yellow-50" />
                    </div>
                </div>
            </div >
        </div>
    )
}