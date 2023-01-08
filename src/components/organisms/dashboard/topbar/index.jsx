export function TopBar({ logout }) {
    return (
        <div className="w-full h-16 bg-white border-b-2 border-l-2">
            <button onClick={logout}>logout</button>
        </div>
    )
}