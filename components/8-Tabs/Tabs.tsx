import { useState, useEffect } from 'react'
import SingleTab from './SingleTab'

const url = "https://course-api.com/react-tabs-project"

export default function Tabs() {
    const [data, setData] = useState([]);
    const [loaded, setLoading] = useState(false);
    const [current, setCurrent] = useState(0);

    const getData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log(`Fetch returned bad response, ${response.statusText}, url: ${url}`)
                throw response
            }

            const mydata = await response.json();
            if (mydata.length === 0) {
                setData([])
                console.log("No data, mydata.length is 0")
                return <div> Failed to load users</div>
            } 
            setData(mydata);
            setLoading(true);
        } catch (e) {
            setLoading(false)
            console.log(e)
            return (e)
        }
    }

    useEffect(() => {
        //getData the first time
        !loaded ? getData() : ``
    }, [])


    const common_props = "lg:text-xl lg:hover:text-red-700 lg:focus:text-red-700 lg:active:text-red-700 lg:ml-4 lg:mb-2 lg:focus:outline-none lg:border-l-2 lg:border-transparent lg:hover:border-red-700 lg:focus:border-red-700 lg:active:border-red-700 lg:px-4 lg:flex lg:justify-start"
    const active_props = "lg:text-red-700 lg:border-l-2 lg:border-red-700"

    const buttonClickHandler = (index) => {
        setCurrent(index)
    }

    if (!loaded) {
        return (
            <div className="flex justify-center">
                <p className="mt-6 text-gray-900 font-medium text-xl">Loading...</p>
            </div>
        )

    }
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="mb-1 sm:mb-6 lg:mb-4 mt-12 xl:mt-20 flex justify-center text-2xl sm:text-4xl font-medium text-gray-900">Experience</h1>
                <hr className="mb-4 lg:mb-16 flex justify-center h-1 rounded-lg mx-auto w-16 bg-red-700"></hr>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex flex-row justify-center lg:pl-10 space-x-2 lg:space-x-0 lg:space-y-2 lg:flex-col lg:justify-start">
                        {data.map((obj, index) => (
                            <div key={index}
                                className="lg:flex lg:flex-row">
                                <button
                                    type="button"
                                    className={`${common_props} ${index === current && active_props}`}
                                    onClick={() => buttonClickHandler(index)}
                                >
                                    <span className="uppercase">{obj.company}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="lg:ml-10">
                    {data[0] != null ? <SingleTab job={data[current]} /> :
                        <p>Data[0] is null</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}