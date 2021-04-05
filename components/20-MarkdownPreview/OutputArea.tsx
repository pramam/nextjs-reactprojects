import { useGlobalMarkdownContext } from "./Context"

export default function OutputArea() {
    const { markdown } = useGlobalMarkdownContext()
    return (
        <div className="w-full sm:w-1/2 mx-4 sm:mx-5 md:mx-5 lg:mx-10 px-5 pt-5 mt-5 sm:mt-0 min-h-[85vh] lg:min-h-[85vh] bg-opacity-20 sm:bg-opacity-0 bg-white sm:bg-transparent rounded-md shadow-xl">
            {markdown}
        </div>
    )
}