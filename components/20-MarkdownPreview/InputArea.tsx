import { useGlobalMarkdownContext } from "./Context"

export default function InputArea() {
    const { markdown, setMarkdown } = useGlobalMarkdownContext()
    return (
        <textarea className="w-full sm:w-1/2 mx-4 sm:mx-5 md:mx-5 lg:mx-10 mt-4 sm:mt-0 min-h-[85vh] lg:min-h-[85vh] bg-opacity-80 bg-white rounded-md shadow-xl focus:ring-transparent focus:border-transparent"
            value={markdown}
            placeholder="Write Markdown here"
            onChange={(e) => setMarkdown(e.target.value)}>
            
        </textarea>
    )
}