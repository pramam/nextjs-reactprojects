import { useState, useEffect } from 'react'
import SingleTab from './SingleTab'

const url = "https://course-api.com/react-tabs-project"

export default function Tabs() {
    const [data, setData] = useState([]);

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
        } catch (e) {
            console.log(e)
            return (e)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="mb-1 sm:mb-4 mt-12 flex justify-center text-2xl sm:text-4xl font-medium text-gray-900">Experience</h1>
                <hr className="mb-4 flex justify-center h-1 rounded-lg mx-auto w-16 bg-gray-700"></hr>

                <div className="flex justify-between">
                    <div className="flex flex-col">
                        {data.map((obj, index) => (
                            <button
                                type="button"
                                key={index}>
                                {obj.company}

                            </button>
                        ))}
                    </div>
                    {data[0] != null ? <SingleTab job={data[0]} /> :
                        <p>Data[0] is null</p>
                    }
                    {/* {data.map((obj, index) => (

                        <SingleTab key={index} job={obj} />
                    ))}  */}

                </div>
            </div>
        </div>
    )
}