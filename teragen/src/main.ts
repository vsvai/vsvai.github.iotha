import "./views/components/main.ts";

import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import consoleLogo from "/svg/console.svg";
import { setupCounter } from "./counter";
import home from "./views/index.html?raw";
import "./style.css";
console.log(home)
document.querySelector<HTMLDivElement>("#app")!.innerHTML = home;


document.querySelector<HTMLAnchorElement>("#consoleLogo")!.innerHTML = `<div>
    <a href="https://vitejs.dev" target="_blank">
  <img src="${typescriptLogo}" width="30px" alt="Console logo" />
    <img src="${viteLogo}" width="30px" alt="Console logo" />
     <img src="${consoleLogo}" width="30px" alt="Console logo" />
      </a>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
