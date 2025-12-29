const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click to visit google",
};
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

function customRender(reactElement, container) {
  const { type, props, children } = reactElement;
  const domElement = document.createElement(type);

  for (const prop in props) {
    domElement.setAttribute(prop, props[prop]);
  }
  domElement.innerText = children;
  container.appendChild(domElement);
}
