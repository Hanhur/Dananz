import modernPng from "../../../img/portfolio/modern.png";
import aboutEllipse from "../../../img/about-ellipse.png";
import "./modern.css";

export function getModern()
{
    const modernBlock = document.createElement("div");
    modernBlock.className = "modern-block";
    modernBlock.innerHTML = `
        <div class="modern-box">
            <img class="modern-img" src="${modernPng}">
            <div class="modern_box">
                <h2 class="modern-title">Modern Room</h2>
                <p class="modern-text">
                    Online learning with us does not interfere with your daily life, 
                    because learning can be done anytime and anywhere.
                </p>
                <button class="modern-btn">See More</button>
            </div>
        </div>
        <div class="block modern">
            <img class="block-img" src="${aboutEllipse}" alt="">
            <div class="blocks">
                <h3 class="blocks-title">Arga Danaan</h3>
                <p class="blocks-text">CEO of Dananz</p>
            </div>
        </div>
    `;

    return modernBlock;
}