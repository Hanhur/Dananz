import { getServicesMain } from "../../components/services/servicesMain/servicesMain";
import { getServicesAchievement } from "../../components/services/servicesAchievement/servicesAchievement";
import "./pageServices.css";

export function getPageServicesMain()
{
    const servicesMain = document.createElement("main");
    servicesMain.className = "services-main";

    servicesMain.append(
        getServicesMain(),
        getServicesAchievement(),
    );

    return servicesMain;
}