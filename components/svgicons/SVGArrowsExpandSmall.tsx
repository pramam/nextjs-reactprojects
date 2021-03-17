export interface IProps {
    css: string
}

// fill color is not working on this icon
export default function SVGArrowsExpandSmall({ css }: IProps): JSX.Element {
    const props = {
        className: `${css}`,
    }

    return (
        <svg
            {...props} xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor">
            <path stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4" />
        </svg>
    )
}
