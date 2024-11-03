import { getAboutMain } from "../../components/about/aboutMain/aboutMain";
import { getAboutAchievement } from "../../components/about/aboutAchievement/aboutAchievement";

import "./pageAbout.css";

export function getPageAboutMain()
{
    const aboutMain = document.createElement("main");
    aboutMain.className = "about-main";

    aboutMain.append(
        getAboutMain(),
        getAboutAchievement(),
    );

    return aboutMain;
}