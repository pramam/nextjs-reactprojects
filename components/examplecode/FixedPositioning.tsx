export default function FixedPositioning() {
    return (
        <div className="pt-24">
            <div className="bg-pink-300 fixed inset-x-0 top-0 h-24">
                The Tulip Shop
            </div>
            <div className="relative">
                <div className="bg-green-300 h-96">Image</div>
                <div className="absolute transform -translate-y-44">Text on image</div>
                <div className="bg-gray-500 h-96">Image</div>
                <div className="bg-green-300 h-96">Image</div>
                <div className="bg-gray-500 h-96">Image</div>
            </div>
        </div>
    )
}