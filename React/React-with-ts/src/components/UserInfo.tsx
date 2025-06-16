import type { Info } from "./types";
interface userProp {
  user: Info;
}
const UserInfo = ({ user }: userProp) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserInfo;
