import SVGChevronRight from '../svgicons/SVGChevronRight'

export default function RightArrow() {
    return (
        <div className="rounded-full h-10 w-10 bg-gray-700">
            <div className="px-0.5 py-1">
                {/* TODO: i18n */}
                <span aria-label="Right Arrow">
                    <SVGChevronRight aria-hidden="true" css="h-8 w-8 text-gray-50" />
                </span>
            </div>
        </div>
    )
}