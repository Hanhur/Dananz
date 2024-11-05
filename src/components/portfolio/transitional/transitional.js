import transitionalPng from "../../../img/portfolio/transitional.png";
import aboutEllipse from "../../../img/about-ellipse.png";
import "./transitional.css";

export function getTransitional()
{
    const transitionalBlock = document.createElement("div");
    transitionalBlock.className = "transitional-block";
    transitionalBlock.innerHTML = `
        <div class="transitional-box">
            <div class="transitional_box">
                <h2 class="transitional-title">Transitional Room</h2>
                <p class="transitional-text">
                    Online learning with us does not interfere with your daily life, 
                    because learning can be done anytime and anywhere.
                </p>
                <button class="transitional-btn">See More</button>
            </div>
            <img class="transitional-img" src="${transitionalPng}">
        </div>
        <div class="block transitional">
            <img class="block-img" src="${aboutEllipse}" alt="">
            <div class="blocks">
                <h3 class="blocks-title">Arga Danaan</h3>
                <p class="blocks-text">CEO of Dananz</p>
            </div>
        </div>
    `;

    return transitionalBlock;
}