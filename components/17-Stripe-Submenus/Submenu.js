import { useGlobalStripeContext } from './Context'
export default function Submenu() {
    const { isSubmenuOpen, navButtonToShow, coords } = useGlobalStripeContext()
    const topSpacePx = 15
    return (
        <>
            {isSubmenuOpen ?

                <div>
                    <div className="absolute py-10 bg-gray-50 z-10 inline-block rounded-md"
                        style={{ left: `${coords.left}px`, top: `${coords.bottom + topSpacePx}px` }}
                    >
                        <div className="flex flex-col">

                            <li>Submenu: {navButtonToShow}</li>
                            <li>Coords: {coords.center}, {coords.bottom}</li>
                        </div>
                    </div>
                </div>
                : ``
            }
        </>
    )
}