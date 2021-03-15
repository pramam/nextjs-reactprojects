import { useGlobalStripeContext } from './Context'
export default function Submenu() {
    const { isSubmenuOpen } = useGlobalStripeContext()

    return (
        <>
            {isSubmenuOpen ?
                <div className="bg-gray-50 z-10 inline-block">Submenu</div>
                : ``
            }
        </>
    )
}