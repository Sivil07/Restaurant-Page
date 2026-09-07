import "../css/global.css"
import "../css/home.css";

import HomeBuilder from "./homeBuilder.js";

const content = document.querySelector("#content");

content.appendChild(HomeBuilder.buildHomePage())

