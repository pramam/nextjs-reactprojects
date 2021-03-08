export interface IProps {
    message: string
}
export default function Modal({ message }: IProps) {
    return (
        <p className="text-center">{message}</p>
    )
}