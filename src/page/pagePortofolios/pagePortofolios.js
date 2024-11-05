import { getPortofolios } from "../../components/portofolios/portofolios";
import "./pagePortofolios.css";

export function getPagePortofolios()
{
    const portofoliosMain = document.createElement("main");
    portofoliosMain.className = "portofolios-main";

    portofoliosMain.append(getPortofolios());

    return portofoliosMain;
}