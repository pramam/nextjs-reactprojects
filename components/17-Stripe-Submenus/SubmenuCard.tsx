import { useGlobalStripeContext } from './Context'

export default function SubmenuCard() {
    const { navButtonToShow, navButtonIndex, navPrevButtonIndex, coordinates } = useGlobalStripeContext()
    const topSpacePx = 0 //-3

    return (
        <div>
            <div className="absolute py-10 bg-gray-50 z-10 inline-block rounded-md"
                style={{ left: `${coordinates.left}px`, top: `${coordinates.bottom + topSpacePx}px` }}
            >
                <div className="flex flex-col">

                    <li>Submenu: {navButtonToShow}: index: {navButtonIndex}</li>
                    <li>PrevButtonIndex: {navPrevButtonIndex} NavButtonIndex: {navButtonIndex} </li>
                    <li>Coords: {coordinates.center}, {coordinates.bottom}</li>
                </div>
            </div>
        </div>
    )
}