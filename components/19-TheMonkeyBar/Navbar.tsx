import Link from 'next/link'
import SVGSwingingMonkey from '../../components/svgicons/SVGSwingingMonkey'
import { useGlobalMonkeyContext } from "./Context"
import { abouturl } from './definitions'

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
    // const { hello } = useGlobalMonkeyContext()

    const nav_common_props = "shadow-lg z-50 bg-monkey-charcoal fixed left-0 right-0 opacity-100 flex items-center justify-center"
    return (
        <div className={`${nav_common_props} ${navheight}`}>
            <div className="w-full">
                <div className="flex flex-row justify-between lg:hidden">
                    <SVGSwingingMonkey css="h-12 w-12 text-gray-900" />
                    <div>About</div>
                </div>
                <div className="hidden lg:flex flex-row justify-between">
                    <div className="flex flex-row">
                        <SVGSwingingMonkey css="h-20 w-20 text-monkey-gold bg-transparent" />
                        <h1 className="-ml-1 mt-2.5 font-monkeylogo font-semibold text-3xl text-monkey-gold">The Monkey Bar</h1>
                    </div>
                    <h1 className="font-monkeylogo text-monkey-gold mt-4 text-lg mr-10 font-semibold">
                        <Link href={abouturl}>
                            <a>
                                About
                            </a>
                        </Link>
                    </h1>
                </div>
            </div >
        </div>
    )
}