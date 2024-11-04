import teamsPng from "../../../img/teams.png";
import "./teamsMain.css";

export function getTeamsMain()
{
    const section = document.createElement("section");
    section.className = "section-teams";

    const container = document.createElement("div");
    container.className = "container";

    const teamsMainBlock = document.createElement("div");
    teamsMainBlock.className = "teams-block";
    teamsMainBlock.innerHTML = `
        <h1 class="teams-title">Our Teams</h1>
        <p class="teams-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <img class="teams-img" src="${teamsPng}">
    `;

    section.append(container);
    container.append(teamsMainBlock);

    return section;
}