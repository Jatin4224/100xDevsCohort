import Body from "./components/Body";
import Navbar from "./components/Navbar";
import store from "./utils/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-[#1F1E24]  h-full w-screen flex flex-col gap-10">
          <Navbar />
          <Body />
        </div>
      </Provider>
    </>
  );
}

export default App;
