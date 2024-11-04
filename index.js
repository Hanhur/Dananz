const app = document.querySelector("#app");

import { getPageHeader } from "./src/page/pageHeader/pageHeader.js";
import { getPageMain } from "./src/page/pageMain/pageMain.js";
import { getPageAboutMain } from "./src/page/pageAbout/pageAbout.js";
import { getPageServicesMain } from "./src/page/pageServices/pageServices.js";
import { getPageTeamsMain } from "./src/page/pageTeams/pageTeams.js";
import { getPageFooter } from "./src/page/pageFooter/pageFooter.js";


app.append(
    getPageHeader(),
    // getPageMain(),
    // getPageAboutMain(),
    // getPageServicesMain(),
    getPageTeamsMain(),
    getPageFooter()
);