import { useContext } from 'react'
import SVGMenu from '../svgicons/SVGMenu'
import { AppContext } from './Context'

export default function Menu() {
    const { openSidebar, showModal } = useContext(AppContext)

    const common_props = "z-0 fixed ml-2 sm:ml-5 md:ml-10 lg:ml-10 mt-2 sm:mt-5 md:mt-7 lg:mt-7 lg:mr-7  focus:outline-none border border-transparent animate animate-expandcontract"
    // Do not allow operation of Menu if Modal is open
    const gray_out_function_props = "pointer-events-none"

    return (
        <button onClick={openSidebar}
            className={`${showModal ? `${common_props} ${gray_out_function_props}` : `${common_props}`}`}>
            <SVGMenu css="h-10 w-10 text-indigo-700" />
        </button>
    )
}