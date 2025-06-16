// import Button from "./components/Button";
// import User from "./components/User";

// const App = () => {
//   return (
//     <div>
//       <User name="jatin" age={22} isStudent={true} />

//       <Button
//         label="click me"
//         disabled={true}
//         onClick={() => alert(disabled ? "button clicked" : "")}
//       />
//       <Button
//         label="click me"
//         disabled={false}
//         onClick={() => alert(disabled ? "button clicked" : "")}
//       />
//     </div>
//   );
// };

// export default App;
import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import { type Info, type AdInfo } from "./components/types";
const App = () => {
  const user: Info = {
    id: 1,
    name: "jatin",
    email: "jatin@gmail.com",
  };

  const admin: AdInfo = {
    id: 2,
    name: "jai",
    email: "jai@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      {/* <User name="jatin" age={22} isStudent={true} /> */}

      <Button
        label="click me"
        disabled={false}
        onClick={() => alert("Button is disabled")}
      />
      <Button
        label="click me"
        disabled={true}
        onClick={() => alert("Button clicked")}
      />
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
