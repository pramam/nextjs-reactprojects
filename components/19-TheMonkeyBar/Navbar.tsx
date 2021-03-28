import SVGSwingingMonkey from '../../components/svgicons/SVGSwingingMonkey'
import { useGlobalMonkeyContext } from "./Context"

export default function Navbar() {
    const { hello } = useGlobalMonkeyContext()

    return (
        <div>
            <div className="flex flex-row">
                <SVGSwingingMonkey css="h-16 w-16 text-gray-900" />
                <p className="text-3xl mt-2 capitalize font-tuliplogo"> {hello} </p>
            </div>
        </div>
    )
}