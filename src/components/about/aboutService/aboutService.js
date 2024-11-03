import { getQuality } from "../../choose/quality";
import { getDesigner } from "../../choose/designer";
import { getServices } from "../../choose/services";

import "./aboutService.css";

export function getAboutService()
{
    const section = document.createElement("section");
    section.className = "section-aboutService";

    const container = document.createElement("div");
    container.className = "container";

    const aboutServiceBlock = document.createElement("div");
    aboutServiceBlock.className = "aboutService-block";
    aboutServiceBlock.innerHTML = `
        <p class="aboutService_text">SERVICE</p>
        <h2 class="aboutService-title">Why Choose Us</h2>
        <p class="aboutService-text">
            Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
        </p>
    `;

    const aboutServiceChoose = document.createElement("div");
    aboutServiceChoose.className = "aboutService-choose";

    section.append(container);
    container.append(aboutServiceBlock, aboutServiceChoose);
    aboutServiceChoose.append(
        getQuality(),
        getDesigner(),
        getServices()
    );

    return section;
}