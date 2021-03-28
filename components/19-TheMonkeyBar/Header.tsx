import Head from 'next/head'

export default function Header() {
    return (
        <Head>
            <title>The Monkey Bar</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Lato&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}