import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;

function Component() {
  return (
    <div>
      <h2>Count:0</h2>
      <h2>Status:Pending</h2>

      <div>
        <button onClick={() => console.log("increment")}>increment</button>
        <button onClick={() => console.log("decrement")}>decrement</button>
        <button onClick={() => console.log("reset")}>reset</button>
      </div>
      <div>
        <button onClick={() => console.log("inactive")}>
          set status to inactive
        </button>
      </div>
    </div>
  );
}

export default Component;
