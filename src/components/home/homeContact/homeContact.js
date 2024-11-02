import "./homeContact.css";

export function getHomeContact()
{
    const section = document.createElement("section");
    section.className = "section-contact";

    const container = document.createElement("div");
    container.className = "container";

    const homeContactBlock = document.createElement("div");
    homeContactBlock.className = "contact-block";
    homeContactBlock.innerHTML = `
        <h2 class="contact-title">Let's discuss making your interior like a dream place!</h2>
        <div class="contact-box">
            <p class="contact-text">Contact us below to work together to build your amazing interior</p>
            <button class="contact-btn">Contact Us</button>
        </div>
    `;

    section.append(container);
    container.append(homeContactBlock);

    return section;
}