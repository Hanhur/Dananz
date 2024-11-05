import minimalistPng from "../../../img/portfolio/minimalist.png";
import aboutEllipse from "../../../img/about-ellipse.png";
import "./minimalist.css";

export function getMinimalist()
{
    const minimalistBlock = document.createElement("div");
    minimalistBlock.className = "minimalist-block";
    minimalistBlock.innerHTML = `
        <p class="portfolio_text">PORTFOLIO</p>
        <div class="minimalist-box">
            <img class="minimalist-img" src="${minimalistPng}">
            <div class="minimalist_box">
                <h2 class="minimalist-title">Minimalist Room</h2>
                <p class="minimalist-text">
                    Online learning with us does not interfere with your daily life, 
                    because learning can be done anytime and anywhere.
                </p>
                <button class="minimalist-btn">See More</button>
            </div>
        </div>
        <div class="block minimalist">
            <img class="block-img" src="${aboutEllipse}" alt="">
            <div class="blocks">
                <h3 class="blocks-title">Arga Danaan</h3>
                <p class="blocks-text">CEO of Dananz</p>
            </div>
        </div>
    `;

    return minimalistBlock;
}