import "./location.css";

export function getLocation()
{
    const section = document.createElement("section");
    section.className = "section_location";

    const container = document.createElement("div");
    container.className = "container";

    const locationBlock = document.createElement("div");
    locationBlock.className = "location-block";
    locationBlock.innerHTML = `
        <p class="location-text">LOCATION</p>
        <div class="location_block">
            <div class="location-stores">
                <h2 class="location-title">Visit Our Stores</h2>
                <p class="location_text">Find us at these locations.</p>
                <address class="location-address">
                    <h3 class="location-address-title">Email</h3>
                    <a class="location-address-link" href="mailto:dananz@gmail.com">dananz@gmail.com</a>
                    <h3 class="location-address-title phone">Phone</h3>
                    <a class="location-address-link" href="tel:+628150021000">+62 815 002 1000</a>
                </address>
            </div>
            <div class="location-box">
                <div class="location-boxs">
                    <h4 class="location-boxs-title">Jakarta</h4>
                    <p class="location-boxs-text">
                        Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                </div>
                <div class="location-boxs">
                    <h4 class="location-boxs-title">Surakarta</h4>
                    <p class="location-boxs-text">
                        Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                </div>
                <div class="location-boxs">
                    <h4 class="location-boxs-title">Yogyakarta</h4>
                    <p class="location-boxs-text">
                        Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                </div>
                <div class="location-boxs">
                    <h4 class="location-boxs-title">Bandung</h4>
                    <p class="location-boxs-text">
                        Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                </div>
            </div>
        </div>
    `;

    section.append(container);
    container.append(locationBlock);

    return section;
}