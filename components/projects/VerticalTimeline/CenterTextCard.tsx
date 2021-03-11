export interface IProps {
    title: string,
    blog: string
}
export default function CenterTextCard({ title, blog }: IProps) {
    return (
        <div className="col-start-4 col-end-7 shadow-xl mx-4">
            <div className="flex flex-col bg-gray-50">
                <div className="m-3 flex justify-center text-xl font-semibold text-gray-400 capitalize">{title}</div>
                <div className="bg-gray-50 flex flex-row justify-center">
                    <div className="text-sm text-gray-400 uppercase mr-3">Blog</div>
                </div>
            </div>
        </div>
    )
}