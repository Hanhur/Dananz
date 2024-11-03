import aboutMainPng from "../../../img/about-main.png"
import "./aboutMain.css";

export function getAboutMain()
{
    const section = document.createElement("section");
    section.className = "section-aboutMain";

    const container = document.createElement("div");
    container.className = "container";

    const aboutMainBlock = document.createElement("div");
    aboutMainBlock.className = "aboutMain-block";
    aboutMainBlock.innerHTML = `
        <h1 class="aboutMain-title">About</h1>
        <p class="aboutMain-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <img class="aboutMain-img" src="${aboutMainPng}">
    `;

    section.append(container);
    container.append(aboutMainBlock);

    return section;
}