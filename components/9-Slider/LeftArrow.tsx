import SVGChevronLeft from '../svgicons/SVGChevronLeft'

export default function LeftArrow() {
    return (
        <div className="rounded-full h-10 w-10 bg-gray-700">
            <div className="mx-0.5 my-1">
                <SVGChevronLeft css="h-8 w-8 text-gray-50" />
            </div>
        </div>
    )
}