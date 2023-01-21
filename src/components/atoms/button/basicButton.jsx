export const BasicButton = ({ text, bg, onClick }) => {
    const bgPrimary = bg == 'primary' ? "bg-primary hover:bg-[#fc8383]" : "";

    return (
        <button className={`${bgPrimary} px-3 py-1 text-white rounded-md align-middle `} onClick={onClick}>
            {text}
        </button>
    )
}