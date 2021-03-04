export interface IProps {
    css: string
}
export default function SVGMenu({ css }: IProps) {
    const props = {
        className: `${css}`
    }
    // hero icon: menu 
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}