import React, {  useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [check, setCheck] = useReducer(
    check => !check,
    false
  )
  return (
    <div>
      <input
       type="checkbox"
       value={check}
       onChange={setCheck} 
      /> this checkbox is {check ? "checked" : "not checked"}
    </div>
  );
}

function App() {
  return <Checkbox login="mouadlouhichi" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
