import { getRating } from "../../rating/rating";
import mainBg from "../../../img/main-bg.png";
import "./homeMain.css";

export function getHomeMain()
{
    const section = document.createElement("section");
    section.className = "section-main";

    const container = document.createElement("div");
    container.className = "container";

    const designBlock = document.createElement("div");
    designBlock.className = "design-block";
    designBlock.innerHTML = `
        <div class="desing-box">
            <h1 class="design-title">Design your interor with high quality.</h1>
            <div class="desing_box">
                <span class="desing_box-span">2022</span>
                <p class="desing_box-text">ALL RIGHT RESERVED</p>
            </div>
        </div>
        <img class="desing-img" src="${mainBg}" alt="">
    `;

    section.append(container);
    container.append(designBlock, getRating());

    return section;
}