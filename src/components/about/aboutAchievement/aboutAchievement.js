// import { getRating } from "../../rating/rating";
import achievementPng from "../../../img/achievement.png";
import "./aboutAchievement.css";


export function getAboutAchievement()
{
    const section = document.createElement("section");
    section.className = "section-achievement";

    const container = document.createElement("div");
    container.className = "container";

    const aboutAchievementBlock = document.createElement("div");
    aboutAchievementBlock.className = "achievement-block";
    aboutAchievementBlock.innerHTML = `
        <p class="achievement-text">ACHIEVEMENT</p>
        <h2 class="achievement-title">Interior customization with Danaanz, best quality with professional workers</h2>
        <img class="achievement-img" src="${achievementPng}">
        <div class="rating-block rating-2">
            <span class="rating-span">350+</span>
            <p class="rating-text texts">Project Completed</p>
            <span class="rating-span">23+</span>
            <p class="rating-text texts">Professional Teams</p>
            <span class="rating-span">15+</span>
            <p class="rating-text">Years Experience</p>
        </div>
    `;

    section.append(container);
    container.append(aboutAchievementBlock);

    return section;
}