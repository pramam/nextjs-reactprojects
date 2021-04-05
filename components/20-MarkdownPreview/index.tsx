import InputArea from './InputArea'
import OutputArea from './OutputArea'

export default function MarkdownPreview() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-400 via-green-200 to-gray-400 ">
            <div className="flex flex-col justify-center items-center mx-5 md:mx-0 lg:mx-5 pt-5 py-5 sm:py-10 sm:flex-row">
                <InputArea />
                <OutputArea />
            </div>
        </div>
    )
}