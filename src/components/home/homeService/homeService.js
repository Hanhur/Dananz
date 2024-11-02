import arrowRight from "../../../img/arrowRight.svg";
import servicePng from "../../../img/service.png";
import "./homeService.css";

export function getHomeService()
{
    const section = document.createElement("section");
    section.className = "section-service";

    const container = document.createElement("div");
    container.className = "container";

    const homeServiceBlock = document.createElement("div");
    homeServiceBlock.className = "service-block";
    homeServiceBlock.innerHTML = `
        <div class="service-box">
            <p class="service-block_text">SERVICE</p>
            <h2 class="service-block_title">attractive furniture with the best quality.</h2>
            <p class="service-block-text">
                Customize your interior design into a dream place with the best designers and quality furniture. 
                We try our best to fulfill your expectations.
            </p>
            <ol class="service-list">
                <li class="service-item">
                    <h3 class="service-title">Interior Design</h3>
                    <img class="service-img" src="${arrowRight}">
                </li>
                <li class="service-item">
                    <h3 class="service-title">Consultant</h3>
                    <img class="service-img" src="${arrowRight}">
                </li>
                <li class="service-item">
                    <h3 class="service-title">Construction Consultant</h3>
                    <img class="service-img" src="${arrowRight}">
                </li>
            </ol>
        </div>
        <img class="service-block_img" src="${servicePng}">
    `;

    section.append(container);
    container.append(homeServiceBlock);

    return section;
}