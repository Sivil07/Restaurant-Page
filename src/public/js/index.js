import "../css/global.css"
import "../css/home.css";

import PageLoader from "./pageLoader.js";
import PageWatcher from "./pageWatcher.js";

PageLoader.initialize();

PageWatcher.navListener();
