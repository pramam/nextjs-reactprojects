import { useFetch } from '../CustomHooks/useFetch'
import Product from './Product'

const url = 'https://course-api.com/react-prop-types-example'

export default function Index() {
    const { products } = useFetch(url)
    return (
        <div>
            <h1 className="text-2xl text-center m-4">Prop Types Example</h1>
            {products.map((obj) => {
                return <Product key={obj.id} {...obj} />
            })}
        </div>
    )
}