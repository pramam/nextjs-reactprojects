import { useGlobalTulipContext } from './Context'
import Link from 'next/link'
import SVGShoppingCart from '../svgicons/SVGShoppingCart'
import { shoppingcarturl } from './definitions'

export default function CartIconWithCount() {
    const { totalCount, totalPrice } = useGlobalTulipContext()

    // console.log(`CartIconWithCount: count: ${totalCount}, price: ${totalPrice}`)
    return (
        // lg:mr-7 has no corresponding lg:ml-7 on the Menu since there is no MenuButton on the left
        // for lg: screens
        <div className="flex flex-col justify-center mr-3 lg:mr-7">
            <Link href={shoppingcarturl}>
                <a className="flex flex-row">
                    <div className="text-base sm:text-xl"> ${totalPrice}</div>
                    <SVGShoppingCart css="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-50" />
                    <div className="text-base sm:text-xl">{totalCount}</div>
                </a>
            </Link>
        </div>
    )
}