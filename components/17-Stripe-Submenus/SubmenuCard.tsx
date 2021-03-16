import { useGlobalStripeContext } from './Context'

export default function SubmenuCard() {
    const { navButtonToShow, navButtonIndex, navPrevButtonIndex, coords } = useGlobalStripeContext()
    const topSpacePx = 0 //-3

    return (
        <div>
            <div className="absolute py-10 bg-gray-50 z-10 inline-block rounded-md"
                style={{ left: `${coords.left}px`, top: `${coords.bottom + topSpacePx}px` }}
            >
                <div className="flex flex-col">

                    <li>Submenu: {navButtonToShow}: index: {navButtonIndex}</li>
                    <li>PrevButtonIndex: {navPrevButtonIndex} NavButtonIndex: {navButtonIndex} </li>
                    <li>Coords: {coords.center}, {coords.bottom}</li>
                </div>
            </div>
        </div>
    )
}