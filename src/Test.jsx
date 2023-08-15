import { useState } from "react";
const Test = () => {
  const [messege, setMessege] = useState("...");
  return (
    <div>
      <button onClick={() => setMessege("Hello")}>Say Hello</button>
      <button onClick={() => setMessege("Bye")}>Say Goodbye</button>
      <br />
      <p>{messege}</p>
    </div>
  );
};

export default Test;
