import { getHomeMain } from "../../components/home/homeMain/homeMain";
import { getHomeAbout } from "../../components/home/homeAbout/homeAbout";

import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(
        getHomeMain(),
        getHomeAbout(),
    );

    return main;
}