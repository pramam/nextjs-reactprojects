export default function paginate(data) {
    const itemsPerPage = 10
    const numPages = Math.ceil(data.length / itemsPerPage)

    const newArrayOfArrays = Array.from({ length: numPages }, (_, index) => {
        const start = index * itemsPerPage
        // console.log(start, start + itemsPerPage - 1)

        return data.slice(start, start + itemsPerPage)

    })

    // console.log(numPages)
    // console.log(newArrayOfArrays)
    return newArrayOfArrays
}