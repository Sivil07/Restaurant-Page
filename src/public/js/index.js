import "../css/global.css"
import "../css/home.css";

import HomeBuilder from "./home.js";

const content = document.querySelector("#content");

content.appendChild(HomeBuilder.buildHomePage())

