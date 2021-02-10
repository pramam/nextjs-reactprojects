export interface IProps {
    css: string
}

export default function SVGChevronRight({ css }: IProps): JSX.Element {
    const props = {
        className: `${css}`,
    }
    return (
        // Heroicon name: chevron-right
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}
