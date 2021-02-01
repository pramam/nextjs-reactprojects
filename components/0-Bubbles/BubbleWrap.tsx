import Bubble from './Bubble'
export interface IProps {
    rows: number
    cols: number
}
export default function BubbleWrap({ rows, cols }: IProps) {
    var bubbles = []
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++)
            bubbles.push([i, j])
    const grid_props = {
        className: `grid grid-cols-${cols} gap-2`
    }
    return (
        <div className="container mx-auto max-w-xl px-8 py-8">
            <div {...grid_props}>
                {bubbles.map((rows, index) => (
                    <div>
                        <Bubble></Bubble>
                    </div>

                ))}
            </div>
        </div>
    )
}
