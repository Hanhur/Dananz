const app = document.querySelector("#app");

import { getPageHeader } from "./src/page/pageHeader/pageHeader.js";
import { getPageMain } from "./src/page/pageMain/pageMain.js";
import { getPageAboutMain } from "./src/page/pageAbout/pageAbout.js";
import { getPageFooter } from "./src/page/pageFooter/pageFooter.js";


app.append(
    getPageHeader(),
    // getPageMain(),
    getPageAboutMain(),
    getPageFooter()
);