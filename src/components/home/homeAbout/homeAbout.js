import aboutIng from "../../../img/about.png";
import aboutEllipse from "../../../img/about-ellipse.png";
import "./homeAbout.css";

export function getHomeAbout()
{
    const section = document.createElement("section");
    section.className = "section-about";

    const container = document.createElement("div");
    container.className = "container";

    const homeAboutBlock = document.createElement("div");
    homeAboutBlock.className = "about-block";
    homeAboutBlock.innerHTML = `
        <p class="about-block_text">ABOUT</p>
        <h2 class="about-block_title">
            “We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”
        </h2>
        <div class="about-box">
            <img class="about-img" src="${aboutIng}" alt="">
            <div class="about_box">
                <p class="about_box-text">
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
                <button class="about_box-btn">Learn More</button>
            </div>
        </div>
        <div class="block">
            <img class="block-img" src="${aboutEllipse}" alt="">
            <div class="blocks">
                <h3 class="blocks-title">Arga Danaan</h3>
                <p class="blocks-text">CEO of Dananz</p>
            </div>
        </div>
    `;

    section.append(container);
    container.append(homeAboutBlock);

    return section;
}