import { forwardRef } from "react"

export const InputBasic = forwardRef((props, ref) => {
    const isfullwidth = props.fullWidth ? 'w-full' : '';

    return (
        <input {...props} className={`bg-white ${isfullwidth} outline-none h-10 rounded-md border border-darkGray p-3`} ref={ref} />
    )
})