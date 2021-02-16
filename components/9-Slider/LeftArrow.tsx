import SVGChevronLeft from '../svgicons/SVGChevronLeft'

export default function LeftArrow() {
    return (
        <div className="rounded-full h-10 w-10 bg-gray-700">
            <div className="px-0.5 py-1">
                <SVGChevronLeft css="h-8 w-8 text-gray-50" />
            </div>
        </div>
    )
}