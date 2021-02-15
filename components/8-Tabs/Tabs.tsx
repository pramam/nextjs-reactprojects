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
            console.log(e)
            return (e)
        }
    }

    useEffect(() => {
        //getData the first time
        !loaded ? getData() : ``
    }, [])
    
    const buttonClickHandler = (index) => {
        setCurrent(index)
    }
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="mb-1 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-4xl font-medium text-gray-900">Experience</h1>
                <hr className="mb-4 flex justify-center h-1 rounded-lg mx-auto w-16 bg-gray-700"></hr>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex flex-row justify-center space-x-2 lg:space-x-0 lg:space-y-2 lg:flex-col lg:justify-start">
                        {data.map((obj, index) => (
                            <div key={index}
                                className="lg:flex lg:flex-row">
                                <button
                                    type="button"
                                    className="lg:focus:text-red-700 lg:hover:text-red-700 lg:ml-4 lg:focus:outline-none lg:border-l-2 lg:border-transparent lg:hover:border-red-700 lg:px-4 lg:flex lg:justify-start"
                                    onClick={() => buttonClickHandler(index)}
                                >
                                    {obj.company}
                                </button>
                            </div>
                        ))}
                    </div>
                    {data[0] != null ? <SingleTab job={data[current]} /> :
                        <p>Data[0] is null</p>
                    }
                </div>
            </div>
        </div>
    )
}