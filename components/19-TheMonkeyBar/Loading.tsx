import SVGRefresh from '../svgicons/SVGRefresh'

export default function Loading() {
    return (
        <div className="flex flex-row items-center justify-center mx-auto">
            <SVGRefresh css="mr-2 h-5 w-5 text-monkey-gold animate-spin" />
        <h2 className="text-center mt-5 mb-5 text-lg font-monkeylogo text-monkey-gold font-semibold">Loading...</h2>
        </div>
    )
}