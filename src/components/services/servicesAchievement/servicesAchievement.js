import { getDesign } from "../../achievement/design";
import { getConsultant } from "../../achievement/consultant";
import { getConstruction } from "../../achievement/construction";
import "./servicesAchievement.css";

export function getServicesAchievement()
{
    const section = document.createElement("section");
    section.className = "section-servAchievement";

    const container = document.createElement("div");
    container.className = "container";

    const servicesAchievementBlock = document.createElement("div");
    servicesAchievementBlock.className = "servAchievement-block";
    servicesAchievementBlock.innerHTML = `<p class="servAchievement-text">ACHIEVEMENT</p>`;

    section.append(container);
    container.append(
        servicesAchievementBlock,
        getDesign(),
        getConsultant(),
        getConstruction()
    );

    return section;
}