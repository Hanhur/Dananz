import arrowRight from "../../../img/arrowRight.svg";
import "./homeProduct.css";

export function getHomeProduct()
{
    const section = document.createElement("section");
    section.className = "section-product";

    const container = document.createElement("div");
    container.className = "container";

    const homeProductBlock = document.createElement("div");
    homeProductBlock.className = "product-block";
    homeProductBlock.innerHTML = `
        <p class="product-block_text">PRODUCT</p>
        <div class="product-box">
            <h2 class="product-box_title">Choose your product themes.</h2>
            <p class="product-box_text">Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>
        </div>
        <ol class="product-list">
            <li class="product-item">
                <div class="products">
                    <h3 class="product-title">Vintage</h3>
                    <p class="product-text">the use of simple and limited elements to get the best effect or impression.</p>
                </div>
                <img class="product-img" src="${arrowRight}">
            </li>
            <li class="product-item">
                <div class="products">
                    <h3 class="product-title">Minimalist</h3>
                    <p class="product-text">the use of simple and limited elements to get the best effect or impression.</p>
                </div>
                <img class="product-img" src="${arrowRight}">
            </li>
            <li class="product-item">
                <div class="products">
                    <h3 class="product-title">Modern</h3>
                    <p class="product-text">the use of simple and limited elements to get the best effect or impression.</p>
                </div>
                <img class="product-img" src="${arrowRight}">
            </li>
            <li class="product-item">
                <div class="products">
                    <h3 class="product-title">Transitional</h3>
                    <p class="product-text">the use of simple and limited elements to get the best effect or impression.</p>
                </div>
                <img class="product-img" src="${arrowRight}">
            </li>
        </ol>
    `;


    section.append(container);
    container.append(homeProductBlock);

    return section;
}