import { useRouter } from 'next/router'

export default function Subscription() {
    const router = useRouter()
    const email = router.query.email;
    // console.log(`Subscription:Email ${email}`)
    return (
        <div className="text-center m-5 text-lg">Thank you
            <span className="text-gray-400 font-thin"> {email} </span>
            for subscribing to our newsletter.
        </div>
    )
}