import { getServicesMain } from "../../components/services/servicesMain/servicesMain";
import { getServicesAchievement } from "../../components/services/servicesAchievement/servicesAchievement";
import { getHomeProduct } from '../../components/home/homeProduct/homeProduct';
import "./pageServices.css";

export function getPageServicesMain()
{
    const servicesMain = document.createElement("main");
    servicesMain.className = "services-main";

    servicesMain.append(
        getServicesMain(),
        getServicesAchievement(),
        getHomeProduct()
    );

    return servicesMain;
}