
import navbar from "./navbar.html?raw";

import "../../style.css";

console.log('navbar',navbar)

document.querySelector<HTMLDivElement>("#navbar")!.innerHTML = navbar;


