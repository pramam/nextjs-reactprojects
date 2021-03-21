import SVGShoppingCart from '../svgicons/SVGShoppingCart'

export default function CartIconWithCount() {
    return (
        // lg:mr-7 has no corresponding lg:ml-7 on the Menu since there is no MenuButton on the left
        // for lg: screens
        <div className="flex flex-col justify-center mr-3 lg:mr-7">
            <div className="flex flex-row">
                <SVGShoppingCart css="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-50" />
                <div className="text-base sm:text-xl">67</div>
            </div>
        </div>
    )
}