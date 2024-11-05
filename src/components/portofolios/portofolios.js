import image1 from "../../img/portofolios/portofolios1.png";
import image2 from "../../img/portofolios/portofolios2.png";
import image3 from "../../img/portofolios/portofolios3.png";
import image4 from "../../img/portofolios/portofolios4.png";
import image5 from "../../img/portofolios/portofolios5.png";
import image6 from "../../img/portofolios/portofolios6.png";

import "./portofolios.css";

export function getPortofolios()
{
    const section = document.createElement("section");
    section.className = "section-portofolios";

    const container = document.createElement("div");
    container.className = "container";

    const portofoliosBlock = document.createElement("div");
    portofoliosBlock.className = "portofolios-block";
    portofoliosBlock.innerHTML = `
        <h1 class="portofolios-title">Minimalist Room</h1>
        <p class="portofolios-text">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout.
        </p>
        <img class="portofolios-img" src="${image1}">
        <div class="portofolios-box">
            <div class="portofolios_box">
                <h2 class="portofolios_title">Project Overview</h2>
                <p class="portofolios_text text">
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. 
                </p>
                <span class="portofolios-span">
                    <p class="portofolios-span-text">July 22 - 2022</p>
                    <p class="portofolios-span_text">Interior Design - Furnitur</p>
                </span>
            </div>
            <div class="portofolios_box">
                <h2 class="portofolios_title">Design Process</h2>
                <p class="portofolios_text _text">
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. 
                </p>
                <p class="portofolios_text">
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
            </div>
        </div>
        <div class="portofolios_box-img">
            <img class="portofolios-images" src="${image2}">
            <img class="portofolios-images" src="${image3}">
        </div>
        <img class="portofolios_images" src="${image4}">
        <div class="portofolios_box-img">
            <img class="portofolios-images" src="${image5}">
            <img class="portofolios-images" src="${image6}">
        </div>
    `;

    section.append(container);
    container.append(portofoliosBlock);

    return section;
}