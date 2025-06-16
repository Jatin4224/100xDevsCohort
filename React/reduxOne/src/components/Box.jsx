import Image from "./Image";
import InsideBox from "./InsideBox";

const Box = ({ firstName, button }) => {
  const data = ["hello", "My name", "is"];
  return (
    <div id="box">
      <div>
        {data.map((elem, index) => (
          <h1 key={index}>{elem}</h1>
        ))}
        <h1>{firstName}</h1>
      </div>
      <div>
        <InsideBox />
      </div>
      <div>
        <Image />
      </div>
      <p>
        <button onClick={() => console.log("button clicked")}>
          {button ? "click me" : "Don't Click"}
        </button>
      </p>
    </div>
  );
};

export default Box;
