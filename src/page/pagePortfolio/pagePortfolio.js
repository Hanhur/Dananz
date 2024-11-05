import { getPortfolio } from "../../components/portfolio/portfolio";
import "./pagePortfolio.css";

export function getPagePortfolio()
{
    const portfolioMain = document.createElement("main");
    portfolioMain.className = "portfolio-main";

    portfolioMain.append(getPortfolio());

    return portfolioMain;
}