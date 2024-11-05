import { getPortfolio } from "../../components/portfolio/portfolio";
import { getAboutService } from '../../components/about/aboutService/aboutService';
import "./pagePortfolio.css";

export function getPagePortfolio()
{
    const portfolioMain = document.createElement("main");
    portfolioMain.className = "portfolio-main";

    portfolioMain.append(
        getPortfolio(),
        getAboutService()
    );

    return portfolioMain;
}