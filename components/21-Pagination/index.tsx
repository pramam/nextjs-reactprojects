import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import FollowerCard from './FollowerCard'

export default function Index() {
    const { loading, data } = useFetch()
    const [pageNum, setPageNum] = useState(0)
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        setPageData(data[pageNum])
    }, [])


    console.log(pageData)
    if (loading)
        return (<h1>Loading</h1>)

    return (
        // <div className="min-h-screen bg-gradient-to-r from-[#cdd1d4]   to-[#cdd1d4] ">
        // bg-gradient-to-tr from-yellow-300 via-green-300 to-yellow-300
        <div className="min-h-screen bg-white">
            <h1 className="flex justify-center mx-auto uppercase font-semibold text-xl py-10 text-green-400">Pagination</h1>
            <div className="container mx-auto">
                {/* Outer  */}
                <ul className="flex flex-row flex-wrap w-full">
                    {pageData.map((obj) => {
                        return (
                            <li key={obj.id} className="flex flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-2">
                                <FollowerCard {...obj} />
                            </li>)

                    })}
                </ul>
            </div>
        </div>
    )
}