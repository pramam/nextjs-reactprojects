// Downloaded from https://worldvectorlogo.com/logo/limbo-coctail-bar
export interface IProps {
    css: string
}

function SVGLimboCoctailBar({ css }: IProps) {
    const props = {
        className: `${css}`
    }
    return (
        <svg width={2500} height={2500} viewBox="0 0 192.756 192.756" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                // fill="#fff"
                d="M0 0h192.756v192.756H0V0z"
            />
            <path
                d="M141.188 21.388c-35.594 0-84.436 33.521-109.202 74.99-24.766 41.354-16.012 74.989 19.583 74.989 13.132 0 28.222-4.607 43.083-12.555l.806-52.527-47.345-13.247 103.903-.46-49.994 14.628-3.109 49.303c23.961-13.709 47.113-35.479 61.857-60.13 24.765-41.47 16.011-74.991-19.582-74.991z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#2b2c2d"
            />
            <path
                d="M111.469 86.586c0 2.074-1.729 3.802-3.918 3.802-2.072 0-3.801-1.728-3.801-3.802 0-2.073 1.729-3.686 3.801-3.686 2.189 0 3.918 1.613 3.918 3.686zm11.863-.691c0 1.498-1.268 2.765-2.879 2.765-1.498 0-2.766-1.267-2.766-2.765 0-1.497 1.268-2.648 2.766-2.648 1.611 0 2.879 1.151 2.879 2.648zm-1.611-11.058a2.188 2.188 0 0 1-2.189 2.189c-1.268 0-2.189-.922-2.189-2.189 0-1.152.922-2.073 2.189-2.073 1.152 0 2.189.921 2.189 2.073zm-9.215-6.335c0 1.497-1.268 2.649-2.881 2.649-1.498 0-2.764-1.152-2.764-2.649 0-1.498 1.266-2.765 2.764-2.765 1.613 0 2.881 1.267 2.881 2.765zm13.246-8.87c0 2.534-2.188 4.607-4.838 4.607s-4.838-2.074-4.838-4.607c0-2.649 2.188-4.724 4.838-4.724s4.838 2.075 4.838 4.724zm5.529-10.943c0 2.419-1.959 4.262-4.377 4.262-2.42 0-4.377-1.843-4.377-4.262 0-2.304 1.957-4.262 4.377-4.262 2.418 0 4.377 1.958 4.377 4.262zm-12.785-8.064c0 2.074-1.844 3.802-4.033 3.802-2.188 0-4.031-1.728-4.031-3.802 0-2.188 1.844-3.916 4.031-3.916 2.189 0 4.033 1.728 4.033 3.916z"
                fill="none"
                stroke="#fff"
                strokeWidth={1.603}
                strokeMiterlimit={2.613}
            />
        </svg>
    )
}

export default SVGLimboCoctailBar
