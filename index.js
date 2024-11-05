const app = document.querySelector("#app");

import { getPageHeader } from "./src/page/pageHeader/pageHeader.js";
import { getPageMain } from "./src/page/pageMain/pageMain.js";
import { getPageAboutMain } from "./src/page/pageAbout/pageAbout.js";
import { getPageServicesMain } from "./src/page/pageServices/pageServices.js";
import { getPageTeamsMain } from "./src/page/pageTeams/pageTeams.js";
import { getPageContact } from "./src/page/pageContact/pageContact.js";
import { getPagePortfolio } from "./src/page/pagePortfolio/pagePortfolio.js";
import { getPagePortofolios } from "./src/page/pagePortofolios/pagePortofolios.js";
import { getPageFooter } from "./src/page/pageFooter/pageFooter.js";


app.append(
    getPageHeader(),
    // getPageMain(),
    // getPageAboutMain(),
    // getPageServicesMain(),
    // getPageTeamsMain(),
    // getPageContact(),
    // getPagePortfolio(),
    getPagePortofolios(),
    getPageFooter()
);