const app = document.querySelector("#app");

import { getPageHeader } from "./src/page/pageHeader/pageHeader.js";
import { getPageMain } from "./src/page/pageMain/pageMain.js";


app.append(
    getPageHeader(),
    getPageMain(),
);