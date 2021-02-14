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
        <main>
            {data.map((obj, index) => (
                <SingleTab data={obj} />
            ))}
        </main>
    )
}