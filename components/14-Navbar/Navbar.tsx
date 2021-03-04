import { navlinks, sociallinks } from './navbaritems'

export default function Navbar() {
    return (
        <div className="bg-white mt-5">
            <div className="flex flex-row justify-between">
                <div className="ml-20 mb-5 text-3xl flex flex-row">
                    <div className="text-gray-900 font-semibold">Your&nbsp;</div>
                    <div className="text-red-600 font-bold">Logo&nbsp;</div>
                    <div className="text-gray-900 font-semibold">Here</div>
                </div>
                <div>
                    <ul className="flex flex-row mt-3">
                        {navlinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2">{obj.label}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-row mt-3 mr-20">
                        {sociallinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2 text-blue-500">{obj.icon}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}