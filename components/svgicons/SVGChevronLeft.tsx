export interface IProps {
    css: string
}
export default function SVGChevronLeft({ css }: IProps) {
    const props = {
        className: `${css}`
    }
    return (
        // Heroicon name: chevron-left
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />
        </svg>
    )
}