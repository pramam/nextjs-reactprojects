import { useGlobalMonkeyContext } from './Context'

export default function Cocktails() {
    const { cocktails } = useGlobalMonkeyContext()

    return (
        <div>
            <h1 className="mt-5 font-monkeylogo text-2xl text-center font-semibold text-monkey-gold">Cocktails</h1>
            <p className="text-center"> Got {cocktails.length} cocktails</p>
        </div>
    )
}