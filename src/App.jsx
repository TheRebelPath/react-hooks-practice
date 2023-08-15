import Test from "./Test";
import CounterTest from "./CounterTest";
import TestReducerHook from "./TestReducerHook";
import TestReducerAdv from "./TestReducerAdv";
import TestUseEffect from "./TestUseEffect";
import TestUseContext from "./TestUseContext";
import Home from "./Home";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>React Hooks Practice</h1>
        <h2>Use State Test</h2>
        <Test />
        <br />
        <h2>Use Sate Counter</h2>
        <CounterTest />
        <br />
        <h2>Use Reducer Hook</h2>
        <TestReducerHook />
        <br />
        <h2>Use Reduce Hook Adv Form</h2>
        <span>User:bob pass:1234</span>
        <TestReducerAdv />
        <br />
        <h2>Use Effect</h2>
        <TestUseEffect />
        <br />
        <h2>Use Context</h2>
        <TestUseContext />
        <br />
        <h2>Props Practice</h2>
        <Home/>
      </div>
    </>
  );
};

export default App;
