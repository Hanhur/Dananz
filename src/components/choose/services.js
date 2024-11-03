import chooseEllipse from "../../img/choose-ellipse.png";
import "./services.css";

export function getServices()
{
    const servicecsBlock = document.createElement("div");
    servicecsBlock.className = "services-block";
    servicecsBlock.innerHTML = `
        <img class="services-img" src="${chooseEllipse}">
        <h3 class="services-title">The Best Services</h3>
        <p class="services-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
        </p>
    `;

    return servicecsBlock;
}