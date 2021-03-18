import Head from 'next/head'
import Landing from './Landing'

export default function Index() {
    return (
        <>
            <Head>
                <title>The Tulip Shop</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Raleway&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="font-tuliptext">
                <div className="min-h-screen relative bg-gray-900">
                    <Landing />
                </div>
            </body>
        </>
    )
}