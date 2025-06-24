const boxItems = ["hobbies", "education", "age"];
const InsideBox = () => {
  return (
    <div>
      {boxItems.map((items, index) => (
        <h1 key={index}>{items}</h1>
      ))}
    </div>
  );
};

export default InsideBox;
