import { getServicesMain } from "../../components/services/servicesMain/servicesMain";
import "./pageServices.css";

export function getPageServicesMain()
{
    const servicesMain = document.createElement("main");
    servicesMain.className = "services-main";

    servicesMain.append(
        getServicesMain(),
    );

    return servicesMain;
}