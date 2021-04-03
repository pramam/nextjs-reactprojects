import { useRouter } from 'next/router'
// import { searchByIDUrl } from '../../../../components/19-TheMonkeyBar/definitions'
import SingleCocktail from '../../../../components/19-TheMonkeyBar/SingleCocktail'

export default function DisplayCocktail() {
    const router = useRouter()
    const { id } = router.query
    // if (!data) return <>Data is empty</>

    // const { drinks } = cocktail
    return (
        <div>
            <SingleCocktail id={id} />
        </div>
    )
}

// IMP: getServerSideProps is not working because I have a custom App
// in pages/_app.js 
//
// instead of fetching data in useEffect, use getServerSideProps
// fetches data at every request from the server
// getServerSideProps and getStaticProps get passed in a context which
// has the id from the url
// const getServerSideProps = async (context) => {
//     const id = context.params.id
//     // const response = await fetch(`${searchByIDUrl}${id}`)
//     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17836`)
//     const cocktail = await response.json()

//     const data = { title: "Hello Sir" }
//     if (!cocktail) {
//         return {
//             notFound: true,
//         }
//     }
//     console.log(cocktail)
//     return {
//         props: data
//     }
// }