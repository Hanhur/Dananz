import { getHomeMain } from "../../components/home/homeMain/homeMain";

import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(
        getHomeMain(),
    );

    return main;
}