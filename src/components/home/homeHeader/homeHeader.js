import Logo from "../../../img/logo.svg";
import "./homeHeader.css";

const headerArray = ["Home", "About Us", "Services", "Our Teams"];

export function getHomeHeader()
{
    const homeHeader = document.createElement("div");
    homeHeader.className = "home-header";

    const homeHeaderImg = document.createElement("img");
    homeHeaderImg.className = "header-img";
    homeHeaderImg.src = Logo;
    homeHeaderImg.alt = "Dananz";

    const homeHeaderList = document.createElement("ul");
    homeHeaderList.className = "header-list";

    headerArray.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "header-items";

        const link = document.createElement("a");
        link.className = "header-link";
        link.href = "#";

        homeHeaderList.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });

    const homeHeaderButton = document.createElement("button");
    homeHeaderButton.className = "header-btn";
    homeHeaderButton.textContent = "Contact Us";

    homeHeader.append(homeHeaderImg, homeHeaderList, homeHeaderButton);

    return homeHeader;
}