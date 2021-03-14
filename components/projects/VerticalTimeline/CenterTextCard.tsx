import Link from 'next/link'

export interface IProps {
    title: string,
    blog: string,
    about: string
}
export default function CenterTextCard({ title, blog, about }: IProps) {
    const text = "text-sm text-gray-400 uppercase mr-3"
    const textgray = "text-sm text-gray-400 uppercase mr-3 cursor-not-allowed"

    return (
        <div className="col-start-4 col-end-7 shadow-xl mx-4">
            <div className="flex flex-col bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">{title}</div>
                <div className="flex flex-row justify-center">
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                        {blog ?
                        <Link href={blog}>
                            <a className={blog ? text : textgray}>Blog</a>
                        </Link>
                            :
                            <a className={blog ? text : textgray}>Blog</a>
                        }
                </div>
                <div className="bg-gray-50 flex flex-row flex-wrap justify-center">
                        <Link href={about}>
                            <a className={about ? text : textgray}>About</a>
                        </Link>
                </div>
                </div>
            </div>
        </div>
    )
}