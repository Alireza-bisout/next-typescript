type User = {
    name: string,
    age: number,
    email: string
}

type Props = {
    user: User,
    showEmail?: boolean
}


function UserProps({ user, showEmail = false }: Props) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            {showEmail && <p>Email: {user.email}</p>}
        </div>
    )
}

export default UserProps