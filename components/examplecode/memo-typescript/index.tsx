import React from 'react'

const temp = [{ "id": 1 }, { "id": 2 }]


export interface IElem {
    id: number
}

export interface IProps {
    products: IElem[]
}
const TestComponent = React.memo(({ products }: IProps) => {
    return (
        <div>
            {products.map((obj, index) => {
                <p>{obj.id}</p>
            })}
        </div>
    )
})

export default function Index() {
    return (
        // <TestComponent products={[{ "id": 1 }, { "id": 2 }]} />
        <TestComponent products={temp} />

    )
}
