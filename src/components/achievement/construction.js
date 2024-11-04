import constructionPng from "../../img/achievement-img/construction.png";
import "./construction.css";

export function getConstruction()
{
    const constructionBlock = document.createElement("div");
    constructionBlock.className = "construction-block";
    constructionBlock.innerHTML = `
        <img class="construction-img" src="${constructionPng}">
        <div class="construction-box">
            <h3 class="construction-title">Construction consultant</h3>
            <p class="construction-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
            </p>
        </div>
    `;

    return constructionBlock;
}