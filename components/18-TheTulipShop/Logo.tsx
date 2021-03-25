import Link from 'next/link'
import { useGlobalTulipContext } from './Context'
import { homeurl } from './definitions'
import menuoptionsData from './menuoptions.json'

export default function Logo() {
    const { isMenuOpen, closeMenu, setCategory } = useGlobalTulipContext()

    const LogoHandler = () => {
        if (isMenuOpen)
            closeMenu()
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <Link href={homeurl}>
                <a onClick={LogoHandler}>
                    <h1 className="font-tuliplogo text-yellow-50 text-center py-6 lg:py-4 text-4xl sm:text-5xl lg:text-6xl"> The Tulip Shop</h1>
                </a>
            </Link>
            <h2 className="hidden lg:block text-base">
                <ul className="flex flex-row mb-2">
                    {menuoptionsData.map((obj, index) => {
                        // Don't have right margin on last item so it is centered nicely
                        return (
                            <li key={index}
                                className={`${index === menuoptionsData.length - 1 ? `` : `mr-3`}`}>
                                <Link href={obj.url}>
                                    <a onClick={() => setCategory(obj.category)}>
                                        {obj.label}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {/* <div className="flex flex-row mb-2">
                    <div className="mr-3">Reds</div>
                    <div className="mr-3">Multicolors</div>
                    <div className="mr-3">Bunches</div>
                    <div className="mr-3">Weddings</div>
                    <div className="">Subscribe</div>
                </div> */}
            </h2>
        </div>
    )
}