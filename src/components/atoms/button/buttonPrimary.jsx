export const ButtonPrimary = (props) => {
    const fullWidth = props.fullWidth ? 'w-full' : '';

    return (
        <button {...props} className={`bg-primary hover:bg-[#fc8383] px-3 py-2 duration-150 ease-in-out text-white rounded-md align-middle ${fullWidth}`}>
            {props.children}
        </button>
    )
}