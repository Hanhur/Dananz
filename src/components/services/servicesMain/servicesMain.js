import servicesMainPng from "../../../img/services-main.png";
import "./servicesMain.css";

export function getServicesMain()
{
    const section = document.createElement("section");
    section.className = "section-services";

    const container = document.createElement("div");
    container.className = "container";

    const servicesMainBlock = document.createElement("div");
    servicesMainBlock.className = "servicesMain-block";
    servicesMainBlock.innerHTML = `
        <h1 class="servicesMain-title">Services</h1>
        <p class="servicesMain-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <img class="servicesMain-img" src="${servicesMainPng}">
    `;

    section.append(container);
    container.append(servicesMainBlock);

    return section;
}