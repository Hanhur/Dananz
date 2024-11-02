import Logo from "../../../img/logo.svg";
import footerEllipseSvg from "../../../img/footer-img/footer-ellipse.svg";
import footerVector from "../../../img/footer-img/footer-vector.svg";
import facebookSvg from "../../../img/footer-img/facebook.svg";
import instagramSvg from "../../../img/footer-img/instagram.svg";
import tiktokSvg from "../../../img/footer-img/tiktok.svg";
import youtubeSvg from "../../../img/footer-img/youtube.svg";
import "./homeFooter.css";

const socialArray = [facebookSvg, instagramSvg, tiktokSvg, youtubeSvg];

export function getHomeFooter()
{
    const homeFooter = document.createElement("div");
    homeFooter.className = "home-footer";

    const homeFooterBlock = document.createElement("div");
    homeFooterBlock.className = "footer-block";

    const homeFooterImg = document.createElement("img");
    homeFooterImg.className = "footer-img";
    homeFooterImg.src = Logo;
    homeFooterImg.alt = "Dananz";

    const footerTitle = document.createElement("h2");
    footerTitle.className = "footer-title";
    footerTitle.textContent = "One of the best furniture agency.";

    const footerForm = document.createElement("form");
    footerForm.className = "footer-form";
    footerForm.innerHTML = `
        <div class="form-box">
            <img class="form-img" src="${footerEllipseSvg}" alt="Ellipse">
            <p class="form-text">Enter  your email to get the laterst news</p>
        </div>
        <input class="form-input" type="text" placeholder="Email Address">
            <img class="input-img" src="${footerVector}" alt="Vector">
        </input>
    `;

    const homeFooterSocial = document.createElement("div")
    homeFooterSocial.className = "footer-social";
    homeFooterSocial.innerHTML = `<p class="social-text">Follow us On</p>`;

    socialArray.forEach(function(item)
    {
        const homeFooterSocialImg = document.createElement("img");
        homeFooterSocialImg.className = "social-img";
        homeFooterSocialImg.src = item;
        homeFooterSocialImg.alt = "Example image";

        homeFooterSocial.appendChild(homeFooterSocialImg);
    });

    homeFooter.append(homeFooterBlock, footerForm);
    homeFooterBlock.append(homeFooterImg, footerTitle);
    footerForm.append(homeFooterSocial);

    return homeFooter;
}