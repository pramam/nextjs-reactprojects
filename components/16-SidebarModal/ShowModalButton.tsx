export default function ShowModalButton({ showModalHandler }) {
    return (
        <div className="z-10 mx-auto text-center h-full">
            <button className="transform translate-y-60 sm:translate-y-60 md:translate-y-96 bg-indigo-700 text-white px-3 py-3 rounded-md focus:outline-none border border-transparent"
                onClick={showModalHandler}>
                Show Modal
                </button>
        </div>
    )
}