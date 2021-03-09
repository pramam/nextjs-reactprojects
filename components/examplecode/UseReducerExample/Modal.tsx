import { useEffect } from 'react'

export interface IProps {
    message: string
    closeModal: () => void
}
export default function Modal({ message, closeModal }: IProps) {
    useEffect(() => {
        const timeout_id = setTimeout(() => {
            closeModal();
        }, 3000)
        return (() => clearTimeout(timeout_id))
    })

    return (
        <p className="text-center">{message}</p>
    )
}