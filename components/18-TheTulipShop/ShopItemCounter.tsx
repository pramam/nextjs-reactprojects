import SVGChevronDownSmall from '../svgicons/SVGChevronDownSmall'
import SVGChevronUpSmall from '../svgicons/SVGChevronUpSmall'

export interface IProps {
    id: number
    count: number
    incrHandler: (id) => void
    decrHandler: (id) => void
}

export default function ShopItemCounter({ id, count, incrHandler, decrHandler }: IProps) {

    return (
        <div className="inline-block">
            <div className="flex flex-row">
                {/* If count is 0, don't allow decrement functionality
                The reducer throws an error if decrement count is called when count is 0 */}
                {count != 0 ?
                    <button className="border rounded-sm border-yellow-50 focus:outline-none"
                        onClick={() => decrHandler(id)}
                    >
                        <SVGChevronDownSmall css="h-5 w-5 text-yellow-50" />
                    </button>
                    :
                    <button className="border rounded-sm border-gray-400 focus:outline-none cursor-not-allowed"
                    >
                        <SVGChevronDownSmall css="h-5 w-5 text-gray-400" />
                    </button>
                }
                <div className="ml-2 mr-2 w-7 text-center">{count}</div>
                <button className="border rounded-sm border-yellow-50 focus:outline-none"
                    onClick={() => incrHandler(id)}
                >
                    <SVGChevronUpSmall css="h-5 w-5 text-yellow-50" />
                </button>
            </div>
        </div>
    )
}