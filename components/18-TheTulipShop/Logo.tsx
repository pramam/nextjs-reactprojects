import Link from 'next/link'
import { homeurl } from './definitions'

export default function Logo() {
    return (
        <div className="flex flex-col justify-center items-center">
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
        </div>
    )
}