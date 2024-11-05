import vintagePng from "../../../img/portfolio/vintage.png";
import aboutEllipse from "../../../img/about-ellipse.png";
import "./vintage.css";

export function getVintage()
{
    const vintageBlock = document.createElement("div");
    vintageBlock.className = "vintage-block";
    vintageBlock.innerHTML = `
        <div class="vintage-box">
            <div class="vintage_box">
                <h2 class="vintage-title">Vintage Room</h2>
                <p class="vintage-text">
                    Online learning with us does not interfere with your daily life, 
                    because learning can be done anytime and anywhere.
                </p>
                <button class="vintage-btn">See More</button>
            </div>
            <img class="vintage-img" src="${vintagePng}">
        </div>
        <div class="block vintage">
            <img class="block-img" src="${aboutEllipse}" alt="">
            <div class="blocks">
                <h3 class="blocks-title">Arga Danaan</h3>
                <p class="blocks-text">CEO of Dananz</p>
            </div>
        </div>
    `;

    return vintageBlock;
}