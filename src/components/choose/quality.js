import chooseEllipse from "../../img/choose-ellipse.png";
import "./quality.css";

export function getQuality()
{
    const qualityBlock = document.createElement("div");
    qualityBlock.className = "quality-block";
    qualityBlock.innerHTML = `
        <img class="quality-img" src="${chooseEllipse}">
        <h3 class="quality-title">High Quality</h3>
        <p class="quality-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
        </p>
    `;

    return qualityBlock;
}