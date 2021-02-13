import menuData from './menudata.json'
import Dish from './Dish'

export default function Menu() {
    return (
        <div>
            <div className="flex flex-col justify-center mb-10 sm:mb-12">
                <h1 className="mb-2 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-5xl font-semibold text-gray-900">The Zen Caf&eacute;  </h1>
                <hr className="flex justify-center h-1.5 sm:h-2 rounded-lg mx-auto w-10 sm:w-20 bg-gray-700"></hr>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2">
                {menuData.map((obj, index) => (
                    <li key={index}
                        className="mb-12"
                    >
                        <Dish dish={obj} />
                    </li>

                ))}
            </ul>
        </div>
    )
}