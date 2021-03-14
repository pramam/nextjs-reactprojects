import SVGChevronRight from '../svgicons/SVGChevronRight'

export default function Button({ text }) {
    return (
        <button className="text-xl px-4 py-2 text-white focus:outline-none border-2 border-gray-800 rounded-md transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out">
            <div className="flex flex-row">
                <span className="text-gray-800 font-semibold">{text}</span>
                <SVGChevronRight css="ml-1.5 mt-2 h-4 w-4 text-gray-800" />
            </div>
        </button>
    )
}