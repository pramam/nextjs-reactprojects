import { useGlobalTulipContext } from './Context'
// import SVGX from '../svgicons/SVGX'
// import SVGMenu from '../svgicons/SVGMenu'
import MenuXButton from './MenuButton'
import Logo from './Logo'
// import SVGShoppingCart from '../svgicons/SVGShoppingCart'
import CartIconWithCount from './CartIconWithCount'
// import Sidebar from './Sidebar'
// import Link from 'next/link'
// import { homeurl } from './definitions'

export interface IProps {
    navheight: string
    navcartheightlg: string
}

// * navheight is the height of the navbar, needed because it's container has that same mt, 
//   and the nav has to be shifted up by that amount (-translate-y-{num})
// * For md: and lower screens, the MenuButton on the left, Logo in center, Cart on right can be flex centered
// * navcartheightlg:
//   For lg: screens, there is no Menu Button on the left. We want the Logo in center, Cart on right.
//   This is accomplished by `flex justify-center` of Logo. And then a `flex justify-end` of Cart
//   and then UP shifting the Cart to be level with the Logo.
//   That is why navcartheightlg is required. It is not 1/2 the navbarheight, but eyeballed
//   to be leveled with The Tulip Shop.
//   It works because the Cart is position `absolute` and the container Navbar is position `fixed`.
export default function Navbar({ navheight, navcartheightlg }: IProps) {
    const { isMenuOpen, openSidebar, closeSidebar } = useGlobalTulipContext()

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
                            {isMenuOpen ?

                                <button onClick={closeSidebar}
                                    className="focus:outline-none border border-transparent">
                                    <SVGX css="h-8 w-8 md:h-10 md:w-10 text-yellow-50" />
                                </button>


                            // <SVGX css="h-10 w-10 text-yellow-50" />
                                : <SVGMenu css="h-10 w-10 text-yellow-50" />
                            }
                        </button>
                    </div> */}

                    <MenuXButton />
                    {/* {isMenuOpen ? <MenuXButton /> : <MenuXButton />} */}
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
                    <CartIconWithCount />
                    {/* <div className="flex flex-col justify-center mr-3 lg:mr-10">
                        <SVGShoppingCart css="h-10 w-10 text-yellow-50" />
                    </div> */}
                </div>
                <div className="hidden lg:flex flex-row justify-center">
                    <Logo />
                </div>
                <div className="hidden lg:flex flex-row justify-end">
                    {/* Note the absolute here  */}
                    <div className={`absolute ${navcartheightlg}`}>
                        <CartIconWithCount />
                    </div>
                </div>
            </div >
        </div>
    )
}