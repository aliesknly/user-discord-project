import { getUserList } from './actions';
import { UserList } from './modules/UserList.component';

export default async function UserPage() {
  const { userList } = await getUserList();
  return (
    <div>
      <button>Add user</button>
      <UserList userList={userList} />
    </div>
  );
}
