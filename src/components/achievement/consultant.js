import consultantPng from "../../img/achievement-img/consultant.png";
import "./consultant.css";

export function getConsultant()
{
    const consultantBlock = document.createElement("div");
    consultantBlock.className = "consultant-block";
    consultantBlock.innerHTML = `
        <img class="consultant-img" src="${consultantPng}">
        <div class="consultant-box">
            <h3 class="consultant-title">Consultant</h3>
            <p class="consultant-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
            </p>
        </div>
    `;

    return consultantBlock;
}