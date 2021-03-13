export default function DisplayAbout() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-500">
            {/* <div className="max-w-3/4"> */}
            <div className="flex justify-center">
                <div className="w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-2/5 mt-20 shadow-lg bg-gray-50 rounded-md">
                    <h1 className="text-2xl sm:text-3xl text-red-600 text-center mt-10">Pallavi Ramam</h1>
                    <p className="ml-10 mr-10 mt-10 text-gray-900">I am a software engineer by training and am coming back to coding, after a sabbatical to pursue other passions. To get back into coding and to get my feet wet, I started learning TailwindCSS, Javascript, React, React Hooks and Next.js and I have built this website to showcase projects built on this JamStack. </p>

                    <p className="ml-10 mr-10 mt-10 text-gray-900 sm:mb-20 mb-40">This website documents my journey of building a portfolio, which you can find <a href={"/"} className="text-blue-600">here</a>. If you'd like to hire me, I can be reached on Twitter at <a href="https://twitter.com/pallaviramam" className="text-blue-600">@pallaviramam</a>.</p>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}