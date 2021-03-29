import Link from 'next/link'
import SVGSwingingMonkey from '../../components/svgicons/SVGSwingingMonkey'
import { abouturl, homeurl } from './definitions'

export interface IProps {
    navheight: string
    // navcartheightlg: string
}

// 19: The Monkey Bar: 
// Color combination inspiration(#7): Gold, Charcoal and Grey 
// https://99designs.com/blog/creative-inspiration/color-combinations/
// 'monkey-gold': '#f5a00c',     //19: The Monkey Bar: Logo color
// 'monkey-charcoal': '#3b4d61', //19: The Monkey Bar: Nav background
// 'monkey-gray': '#6b7b8c'      //19: The Monkey Bar: Text color on bg-gray-50

// * navheight is the height of the navbar, needed because it's container has that same mt, 
//   and the nav has to be shifted up by that amount (-translate-y-{num})
export default function Navbar({ navheight }: IProps) {
 
    const nav_common_props = "shadow-lg z-50 bg-monkey-charcoal fixed left-0 right-0 opacity-100 flex items-center justify-center"
    return (
        <nav className={`${nav_common_props} ${navheight}`}>
            <div className="w-full">
                <div className="flex flex-row justify-between sm:hidden">
                    <Link href={homeurl}>
                        <a>
                            <SVGSwingingMonkey css="h-12 w-12 text-monkey-gold bg-transparent" />
                        </a>
                    </Link>
                    <h2 className="font-monkeylogo text-monkey-gold mr-4 mt-4 text-sm font-semibold">
                        <Link href={abouturl}>
                            <a>
                                About
                            </a>
                        </Link>
                    </h2>
                </div>
                <div className="hidden sm:flex flex-row justify-between">
                    <Link href={homeurl}>
                        <a>
                            <div className="flex flex-row">
                                <SVGSwingingMonkey css="sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-monkey-gold bg-transparent" />
                                <h1 className="-ml-1 sm:mt-2.5 md:mt-2.5 font-monkeylogo font-semibold md:text-xl lg:text-3xl text-monkey-gold">The Monkey Bar</h1>
                            </div>
                        </a>
                    </Link>
                    <h1 className="font-monkeylogo text-monkey-gold sm:mt-4 md:mt-3 lg:mt-4 sm:text-xs md:text-base lg:text-lg mr-10 font-semibold">
                        <Link href={abouturl}>
                            <a>
                                About
                            </a>
                        </Link>
                    </h1>
                </div>
            </div >
        </nav>
    )
}