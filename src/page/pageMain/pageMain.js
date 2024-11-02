import { getHomeMain } from "../../components/home/homeMain/homeMain";
import { getHomeAbout } from "../../components/home/homeAbout/homeAbout";
import { getHomeService } from "../../components/home/homeService/homeService";
import { getHomeProduct } from "../../components/home/homeProduct/homeProduct";
import { getHomeMaterial } from "../../components/home/homeMaterial/homeMaterial";
import { getHomeContact } from "../../components/home/homeContact/homeContact";

import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(
        getHomeMain(),
        getHomeAbout(),
        getHomeService(),
        getHomeProduct(),
        getHomeMaterial(),
        getHomeContact()
    );

    return main;
}