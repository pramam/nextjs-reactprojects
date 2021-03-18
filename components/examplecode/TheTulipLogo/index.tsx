import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head>
                <title>The Tulip Shop</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Raleway&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid h-1/5 bg-gray-900">
                <h1 className="font-tuliplogo text-yellow-50 text-center py-10 text-6xl"> The Tulip Shop</h1>
            </div>
        </>
    )
}