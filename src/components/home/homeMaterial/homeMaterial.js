import materialPng1 from "../../../img/material-1.png";
import materialPng2 from "../../../img/material-2.png";
import materialPng3 from "../../../img/material-3.png";

import "./homeMaterial.css";

export function getHomeMaterial()
{
    const section = document.createElement("section");
    section.className = "section-material";

    const container = document.createElement("div");
    container.className = "container";

    const homeMaterialBlock = document.createElement("div");
    homeMaterialBlock.className = "material-block";
    homeMaterialBlock.innerHTML = `
        <div class="material-box">
            <p class="material_text">MATERIAL</p>
            <h2 class="material-title">Choice of materials for quality furniture.</h2>
            <p class="material-text">You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
            <button class="material-btn">See Materials</button>
        </div>
        <div class="material-images">
            <img class="material-png1" src="${materialPng1}">
            <div class="material_images">
                <img class="material-png2" src="${materialPng2}">
                <img class="material-png3" src="${materialPng3}">
            </div>
        </div>
    `;

    section.append(container);
    container.append(homeMaterialBlock);

    return section;
}