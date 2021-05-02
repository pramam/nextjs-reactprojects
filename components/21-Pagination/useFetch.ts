import { useState, useEffect } from 'react'
import paginate from './utils/paginate'
const url = "https://api.github.com/users/john-smilga/followers?per_page=100"

export default function useFetch() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            // paginate(data)
            setData(paginate(data))
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { loading, data }
}