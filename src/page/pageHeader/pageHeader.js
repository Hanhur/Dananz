import { getHomeHeader } from "../../components/home/homeHeader/homeHeader";
import "./pageHeader.css";

export function getPageHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";

    header.append(container);
    container.append(getHomeHeader());

    return header;
}