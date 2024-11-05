import { getMinimalist } from "./minimalist/minimalist";
import { getVintage } from "./vintage/vintage";
import { getModern } from "./modern/modern";
import { getTransitional } from "./transitional/transitional";
import portfolioPng from "../../img/portfolio/portfolio.png";
import "./portfolio.css";

export function getPortfolio()
{
    const section = document.createElement("section");
    section.className = "section-portfolio";

    const container = document.createElement("div");
    container.className = "container";

    const portfolioBlock = document.createElement("div");
    portfolioBlock.className = "portfolio-block";
    portfolioBlock.innerHTML = `
        <h1 class="portfolio-title">Portofolio</h1>
        <p class="portfolio-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <img class="portfolio-img" src="${portfolioPng}">
    `;

    section.append(container);
    container.append(
        portfolioBlock,
        getMinimalist(),
        getVintage(),
        getModern(),
        getTransitional(),
    );

    return section;
}