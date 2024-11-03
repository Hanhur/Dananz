import chooseEllipse from "../../img/choose-ellipse.png";
import "./designer.css";

export function getDesigner()
{
    const designerBlock = document.createElement("div");
    designerBlock.className = "designer-block";
    designerBlock.innerHTML = `
        <img class="designer-img" src="${chooseEllipse}">
        <h3 class="designer-title">Professional Designer</h3>
        <p class="designer-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
        </p>
    `;

    return designerBlock;
}