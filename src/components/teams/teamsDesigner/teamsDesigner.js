import { getPerson } from "../../person/person";
import "./teamsDesigner.css";

export function getTeamsDesigner()
{
    const section = document.createElement("section");
    section.className = "section-designer";

    const container = document.createElement("div");
    container.className = "container";

    const teamsDesignerBlock = document.createElement("div");
    teamsDesignerBlock.className = "designer_block";
    teamsDesignerBlock.innerHTML = `
        <p class="designer_text">DESIGNER</p>
        <h2 class="designer_title">Creative Person</h2>
        <p class="designer__text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
        </p>
    `;

    section.append(container);
    container.append(teamsDesignerBlock);
    teamsDesignerBlock.append(getPerson());

    return section;
}