type UserProps = {
    name: string;
    age: number;
    isOnline: boolean
}

function UserCard({ name, age, isOnline }: UserProps) {
    return (
        <div className="size-50 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer">
            <div>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Status: {isOnline ? "Online ✅" : "Offline ❌"}</p>
            </div>
        </div>
    )
}

export default UserCard