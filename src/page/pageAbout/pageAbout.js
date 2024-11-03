import { getAboutMain } from "../../components/about/aboutMain/aboutMain";

import "./pageAbout.css";

export function getPageAboutMain()
{
    const aboutMain = document.createElement("main");
    aboutMain.className = "about-main";

    aboutMain.append(
        getAboutMain(),
    );

    return aboutMain;
}