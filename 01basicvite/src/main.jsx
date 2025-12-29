import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click to visit google",
};

function MyApp() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    click to visit google
  </a>
);
const ActReactElement = React.createElement(
  //order is imp==> type, props, children
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click to visit google"
);

//render mai basically apka html ka code jata hai , ab hum direct AnotherElement bhi likh sakhte BS A IS CAPITAL
//now humne jo reactElemnt dewclare kara tha usme humne apne according define kara
// ActReactElement main react ka use krke define kara hai
createRoot(document.getElementById("root")).render(ActReactElement);
