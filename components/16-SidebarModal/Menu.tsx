import SVGMenu from '../svgicons/SVGMenu'

export interface IProps {
    clickHandler: () => void
}
export default function Menu({ clickHandler }: IProps) {
    return (
        <button onClick={clickHandler}
            className="ml-2 sm:ml-5 md:ml-10 lg:ml-10 mt-2 sm:mt-5 md:mt-7 lg:mt-7 lg:mr-7  focus:outline-none border border-transparent">
            <SVGMenu css="h-10 w-10 text-indigo-700" />
        </button>
    )
}