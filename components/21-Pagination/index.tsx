import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import FollowerCard from './FollowerCard'
import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'

export default function Index() {
    const { loading, data } = useFetch()
    const [pageNum, setPageNum] = useState(0)
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        if (loading) return
        setPageData(data[pageNum])
    }, [loading, pageNum])

    const pageClickHandler = (page) => {
        setPageNum(page)
    }

    const prevPageHandler = () => {
        setPageNum(oldPage => {
            let prevPage;
            if (oldPage === 0)
                prevPage = data.length - 1
            else
                prevPage = oldPage - 1;
            return prevPage
        })
    }

    const nextPageHandler = () => {
        setPageNum(oldPage => {
            let nextPage;
            if (oldPage === data.length - 1)
                nextPage = 0
            else
                nextPage = oldPage + 1
            return nextPage
        })
    }
    // useEffect(() => {
    // }, [pageNum])

    if (loading)
        return (<h1 className="flex justify-center mx-auto uppercase font-semibold text-xl py-10 text-green-400">Loading...</h1>)

    // console.log(pageData)
    if (!pageData)
        return (<h1 className="flex justify-center mx-auto uppercase font-semibold text-xl py-10 text-green-400">Paginating Data...</h1>)

    return (
        // <div className="min-h-screen bg-gradient-to-r from-[#cdd1d4]   to-[#cdd1d4] ">
        // bg-gradient-to-tr from-yellow-300 via-green-300 to-yellow-300
        <div className="min-h-screen bg-white">
            <h1 className="flex justify-center mx-auto uppercase font-semibold text-xl py-10 text-green-400">Pagination</h1>
            <div className="container mx-auto">
                {/* Outer  */}
                {!loading &&
                <ul className="flex flex-row flex-wrap w-full">
                    {pageData.map((obj) => {
                        return (
                            <li key={obj.id} className="flex flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-2">
                                <FollowerCard {...obj} />
                            </li>)

                    })}
                </ul>
                }
                {loading ? '' :
                    <div className="flex justify-center flex-row flex-wrap">
                        <button onClick={prevPageHandler}
                            className="focus:outline-none border border-transparent">
                            <SVGChevronLeft css="uppercase text-sm rounded-md h-12 w-12 py-3 px-2 mr-2 bg-green-300 font-semibold text-white" />
                        </button>
                        {data.map((obj, index) => {
                            const base_props = "font-semibold text-white p-3 m-2 focus:outline-none border border-transparent uppercase text-sm rounded-md"
                            const button_props = {
                                className: pageNum === index ? `bg-green-500 ${base_props}` : `bg-green-300 ${base_props}`
                            }
                            return (
                                <button
                                    key={index}
                                    {...button_props}
                                    onClick={() => pageClickHandler(index)}
                                >
                                    {index + 1}
                                </button>)
                        })}
                        <button onClick={nextPageHandler}
                            className="focus:outline-none border border-transparent">
                            <SVGChevronRight css="uppercase text-sm rounded-md h-12 w-12 py-3 px-2 mr-2 bg-green-300 font-semibold text-white" />
                        </button>

                    </div>
                }
            </div>
        </div>
    )
}