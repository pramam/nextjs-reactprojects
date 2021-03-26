import useFetch from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

export default function UseFetchExample() {
    const { loading, products } = useFetch(url)
    console.log(products)
    return (
        <div>
            <h2 className="text-center text-2xl"> {loading ? 'Loading...' : 'Data'}</h2>
        </div>
    )
}