import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import consoleLogo from "/svg/console.svg";
import { setupCounter } from "./counter";
import home from "./views/home.html?raw";
import { footbar, main, navbar } from "./views/components/index";
// import home from "./views/home";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = home;

document.querySelector<HTMLDivElement>("#navbar")!.innerHTML = navbar;
document.querySelector<HTMLDivElement>("#main")!.innerHTML = main;
document.querySelector<HTMLDivElement>("#footbar")!.innerHTML = footbar;

document.querySelector<HTMLAnchorElement>("#consoleLogo")!.innerHTML = `<div>
    <a href="https://vitejs.dev" target="_blank">
  <img src="${typescriptLogo}" width="30px" alt="Console logo" />
    <img src="${viteLogo}" width="30px" alt="Console logo" />
     <img src="${consoleLogo}" width="30px" alt="Console logo" />
      </a>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
