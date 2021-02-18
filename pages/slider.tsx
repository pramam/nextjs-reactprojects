import Slider from '../components/9-Slider/Slider'

export default function DisplaySlider() {
    return (
        <div className="relative min-h-screen bg-gray-900">
            <div className="flex flex-col justify-center ">
                <Slider />
                <footer className="flex justify-center text-center">
                    <div className="absolute text-gray-500 bottom-0">Icons made by<a href="https://www.freepik.com" title="Freepik">&nbsp;Freepik&nbsp;</a>from&nbsp;<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </footer>
            </div>
        </div>
    )
}