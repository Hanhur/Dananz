import "./contact.css";

export function getContact()
{
    const section = document.createElement("section");
    section.className = "section_contact";

    const container = document.createElement("div");
    container.className = "container";

    const contactBlock = document.createElement("div");
    contactBlock.className = "contact_block";
    contactBlock.innerHTML = `
        <h1 class="contact_title">Contact Us</h1>
        <p class="contact_text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <form class="contact-form">
            <div class="contact-box-label">
                <div class="contact-box_label">
                    <label class="contact-label">First Name</label>
                    <input class="contact_input" type="text" placeholder="First Name">
                </div>
               <div class="contact-box_label">
                    <label class="contact-label">Last Name</label>
                    <input class="contact_input" type="text" placeholder="Last Name">
               </div>
            </div>
            <label class="contact-label">Email</label>
            <input class="contact-input" type="text" placeholder="Email">
            <label class="contact-label">Phone Number</label>
            <input class="contact-input" type="text" placeholder="First Name">
            <label class="contact-label">Message</label>
            <textarea class="contact-textarea" placeholder="Your Message"></textarea>
        </form>
        <button class="contact_btn">Send Massage</button>
    `;

    section.append(container);
    container.append(contactBlock);

    return section;
}