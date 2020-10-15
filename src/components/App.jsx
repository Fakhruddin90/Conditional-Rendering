import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// ternary operator ////
// isLoggedIn ? <h1>Hello</h1> : <Login />

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
