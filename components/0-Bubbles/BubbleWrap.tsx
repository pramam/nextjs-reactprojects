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

    // * create this temp variable so purge-css doesn't purge these grid-cols classes for
    // * a production build.
    // * https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
    // * commenting  out the temp variable works, as long as purge-css finds these strings in the code,
    // * it doesn't purge these classes
    // const temp = "grid-cols-none grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-11 grid-cols-12"
    const grid_props = {
        // If I pass in grid-cols-${cols} purge css is removing it in a 
        // production build.
        // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
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
