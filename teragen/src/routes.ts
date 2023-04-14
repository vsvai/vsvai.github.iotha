import home from "./views/index.html?raw";
import product from "./views/products.html?raw";
import about from "./views/about.html?raw";
import service from "./views/service.html?raw";
import nav from "./views/components/navbar.html?raw";

import "./style.css";

// const nav = `<a href="/">Home</a> |
//                    <a href="/product">About</a> |
//                    <a href="/contact">Contact</a>`;
const routes = {
  "/": `${home} `,
  "/home": `${home} `,
  "/about": `${about} `,
  "/product": ` ${product} `,
  "/service": ` ${service} `,
};
let oldlink = "";
const render = (path): void => {
  try {
    document.querySelector("#app").innerHTML =
      routes[path] || `<h1>404</h1>${nav}`;
    document.querySelectorAll('[href^="/"]').forEach((el) =>
      el.addEventListener("click", (evt: any) => {
        evt.preventDefault();
        if (!evt.target.href) return;

        const newlink = evt.target.href;

        if (newlink.toString() == oldlink.toString()) return;
        oldlink = newlink;
        console.log("route", newlink);
        const { pathname: path } = new URL(evt.target.href);
        window.history.pushState({ path }, path, path);
        render(path);
      })
    );
  } catch (err) {
    console.log(err);
  }
};
window.addEventListener("popstate", (e) => {
  console.log(e);
  const urlLoad = new URL(window.location.href).pathname;
  render(urlLoad);
});
render("/");
