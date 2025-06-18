// type UserPropType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
interface UserPropInterface {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = ({ name, age, isStudent }: UserPropInterface) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default User;
