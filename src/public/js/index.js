import "../css/global.css"
import "../css/home.css";
import "../css/menu.css"

import NavBuilder from "./navBuilder.js";
import PageLoader from "./pageLoader.js";
import PageWatcher from "./pageWatcher.js";

NavBuilder.initialize();
PageLoader.initialize();

PageWatcher.navListeners();
