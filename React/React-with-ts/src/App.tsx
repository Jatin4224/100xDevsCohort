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
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name="jatin" age={22} isStudent={true} />

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
    </div>
  );
};

export default App;
