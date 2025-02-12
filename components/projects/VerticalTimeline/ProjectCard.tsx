import Link from 'next/link'

export interface IProps {
    id: number,
    image: string,
    title: string,
    url: string,
    blogurl: string,
    inspiration: string,
    githuburl: string,
    isproject: boolean
}

export default function ProjectCard({ id, image, title, url, blogurl, inspiration, githuburl, isproject }: IProps) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-300 uppercase mr-3 cursor-not-allowed"
    return (
        <div className="mt-2 flex flex-col flex-shrink shadow-xl mx-4">
            {/* Display a text card if not a project */}
            {isproject ?
                // <div className="max-w-4/6 sm:max-w-4/5">
                <div className="max-w-full sm:max-w-full">

                <img
                    className="w-full h-64 object-cover flex justify-center items-center"
                    src={image}
                        alt={title}
                />
                </div> : ``}
            <div className="bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">
                    {isproject ? `${id}. ` : ``}{title}
                </div>
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                    {url ?
                        <Link href={url}>
                            <a className={url ? text : textgray} >Demo</a>
                        </Link> 
                        :
                        <a className={url ? text : textgray} >Demo</a>
                    }
                    {blogurl ?
                        <Link href={blogurl}>
                            <a className={blogurl ? text : textgray}>Blog</a>
                        </Link>
                        :
                        <a className={blogurl ? text : textgray}>Blog</a>
                    }
                    <a href={inspiration} className={inspiration ? text : textgray}>Inspiration</a>
                    <a href={githuburl} className={githuburl ? text : textgray}>Github</a>
                </div>
            </div>
        </div>

    )
}