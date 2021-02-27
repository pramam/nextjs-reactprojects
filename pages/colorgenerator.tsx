import ColorGen from '../components/12-ColorGenerator/ColorGen'

export default function DisplayColorGenerator() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
            <ColorGen />
        </div>
    )
}