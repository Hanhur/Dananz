import designPng from "../../img/achievement-img/design.png";
import "./design.css";

export function getDesign()
{
    const designBlock = document.createElement("div");
    designBlock.className = "design-block";
    designBlock.innerHTML = `
        <img class="design-img" src="${designPng}">
        <div class="design-box">
            <h3 class="design_title">Interior design</h3>
            <p class="design-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
            </p>
        </div>
    `;

    return designBlock;
}