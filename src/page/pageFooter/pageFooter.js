import { getHomeFooter } from "../../components/home/homeFooter/homeFooter";
import { getHomeContact } from "../../components/home/homeContact/homeContact";
import "./pageFooter.css";

export function getPageFooter()
{
    const footer = document.createElement("footer");
    footer.className = "footer";

    const container = document.createElement("div");
    container.className = "container";

    footer.append(container);
    container.append(
        getHomeContact(),
        getHomeFooter(),
    );

    return footer;
}