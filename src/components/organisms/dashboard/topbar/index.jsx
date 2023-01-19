export function TopBar({ logout, username }) {
    return (
        <div className="flex w-full h-16 bg-white border-b-2 border-l-2 items-center">
            <div className="w-full mx-10">
                {/* <button onClick={logout}>logout</button> */}
                <p className="text-end">{username}</p>
            </div>
        </div>
    )
}