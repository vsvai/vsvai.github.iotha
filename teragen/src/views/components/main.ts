import navbar from "./navbar.html?raw";
import footbar from "./footbar.html?raw";

// import "../../style.css";

// console.log("navbar", navbar);

document.querySelector<HTMLDivElement>("#navbar")!.innerHTML = navbar;

document.querySelector<HTMLDivElement>("#footbar")!.innerHTML = footbar;
