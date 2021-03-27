import PropTypes from 'prop-types'

const defaultImage = "/examples/prop-types-default-image.jpeg"
const defaultName = "furniture"
export default function Product({ image, name, price }) {
    console.log(name, price, image)
    const url = image && image.url
    return (
        <div className="max-w-xl mx-auto justify-center">
            <div className="flex flex-row justify-between mb-2">
                <img src={url || defaultImage} alt={name || defaultName} />
                <h4 className="text-xl capitalize">{name || defaultName}</h4>
                <h4 className="text-lg ">{price || 3.99}</h4>
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

// Product.defaultProps = {
//     image: "/examples/prop-types-default-image.jpeg",
//     name: 'default name',
//     price: 3.99
// }