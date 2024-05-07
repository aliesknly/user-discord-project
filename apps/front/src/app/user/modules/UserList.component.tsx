import { UserEntity } from '@user-discord-project/modules';

export function UserList({ userList }:{ userList: UserEntity[] }) {
    
    return (
        <div>
            <h1>UserList</h1>
            {userList.map((user) => (
                <div key={user.email}>
                    {user.userName}
                </div>
            ))}
        </div>
    );
}