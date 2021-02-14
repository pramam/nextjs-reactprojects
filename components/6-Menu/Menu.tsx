import { useState } from 'react'
import menuData from './menudata.json'
import Dish from './Dish'

export default function Menu() {
    const [menu, setMenu] = useState(menuData);
    const [display, setDisplay] = useState(menuData);

    const allHandler = () => {
        setDisplay(menu);
    }

    const beverageHandler = () => {
        const beverages = menu.filter(item => item.category == 'beverage');
        setDisplay(beverages)
    }

    const breakfastHandler = () => {
        const breakfast = menu.filter(item => item.category == 'breakfast');
        setDisplay(breakfast)
    }

    const lunchHandler = () => {
        const lunch = menu.filter(item => item.category == 'lunch');
        setDisplay(lunch)
    }

    return (
        <div>
            <div className="flex flex-col justify-center mb-10 sm:mb-12">
                <h1 className="mb-2 sm:mb-6 mt-12 flex justify-center text-2xl sm:text-5xl font-normal text-gray-900">The Zen Caf&eacute;  </h1>
                <hr className="mb-2 flex justify-center h-0.5 rounded-lg mx-auto w-20 sm:w-40 bg-gray-700"></hr>
                <div className="flex justify-center space-x-2 lg:space-x-4">
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none border border-transparent"
                        onClick={allHandler}
                    ><h2>All</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none border border-transparent"
                        onClick={beverageHandler}
                    ><h2>Beverages</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none border border-transparent"
                        onClick={breakfastHandler}
                    ><h2>Breakfast</h2>
                    </button>
                    <button
                        type="button"
                        className="hover:bg-gray-400 px-1 rounded focus:outline-none border border-transparent"
                        onClick={lunchHandler}
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