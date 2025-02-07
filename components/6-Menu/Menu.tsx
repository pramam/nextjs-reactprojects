import { useState } from 'react'
import menuData from './menudata.json'
import Dish from './Dish'

export default function Menu() {
    const [menu, setMenu] = useState(menuData);
    const [display, setDisplay] = useState(menuData);

    const allHandler = () => {
        setDisplay(menu);
    }

    const clickHandler = (category) => {
        const subitems = menu.filter(item => item.category === category);
        setDisplay(subitems)
    }

    return (
        <div>
            <div className="flex flex-col justify-center mb-10 sm:mb-12">
                <h1 className="mb-2 sm:mb-6 mt-12 flex justify-center text-2xl sm:text-5xl font-normal text-gray-900">The Zen Caf&eacute;  </h1>
                <hr className="mb-4 flex justify-center h-0.5 rounded-lg mx-auto w-20 sm:w-40 bg-gray-700"></hr>
                <div className="flex justify-center space-x-2 lg:space-x-4">
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-600 border border-transparent"
                        onClick={allHandler}
                    ><h2>All</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-600 border border-transparent"
                        onClick={() => clickHandler('beverage')}
                    ><h2>Beverages</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-600 border border-transparent"
                        onClick={() => clickHandler('breakfast')}
                    ><h2>Breakfast</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-600 border border-transparent"
                        onClick={() => clickHandler('lunch')}
                    ><h2>Lunch</h2>
                    </button>
                </div>
            </div>
            <ul className="flex justify-center xl:justify-between flex-wrap">

                {display.map((obj, index) => (
                    <li key={index}
                        className="mb-12 lg:max-w-xl"
                    >
                        <Dish dish={obj} />
                    </li>

                ))}
            </ul>
        </div>
    )
}