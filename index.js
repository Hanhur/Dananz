const app = document.querySelector("#app");

import { getPageHeader } from "./src/page/pageHeader/pageHeader.js";


app.append(
    getPageHeader(),
);