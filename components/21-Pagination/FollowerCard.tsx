import Link from 'next/link'

export interface IProps {
    avatar_url: string
    html_url: string
    login: string
}
export default function FollowerCard({ avatar_url, html_url, login }: IProps) {
    return (
        <article className="flex flex-col w-full justify-center items-center bg-white mx-5 sm:mx-2 lg:mx-7 shadow-lg rounded-lg">

            <img className="mt-5 mb-3 h-20 w-20 rounded-full"
                src={avatar_url} alt={login}
            />
            <h1 className="text-sm uppercase mb-3">{login}</h1>
            <Link href={html_url}>
                <button className="mb-5 bg-gradient-to-tr from-green-200 via-green-300 to-green-200 font-semibold text-white px-5 py-2 focus:outline-none border border-transparent uppercase text-sm rounded-md">Github Profile</button>
            </Link>
        </article>
    )
}