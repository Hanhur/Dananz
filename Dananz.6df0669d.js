parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OEkT":[function(require,module,exports) {
module.exports="/Dananz/logo.5d2b1e79.svg";
},{}],"Owns":[function(require,module,exports) {

},{}],"J3Kx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHomeHeader=r;var e=a(require("../../../img/logo.svg"));function a(e){return e&&e.__esModule?e:{default:e}}require("./homeHeader.css");var t=["Home","About Us","Services","Our Teams"];function r(){var a=document.createElement("div");a.className="home-header";var r=document.createElement("img");r.className="header-img",r.src=e.default,r.alt="Dananz";var n=document.createElement("ul");n.className="header-list",t.forEach(function(e){var a=document.createElement("li");a.className="header-items";var t=document.createElement("a");t.className="header-link",t.href="#",n.appendChild(a),a.appendChild(t),t.innerHTML=e});var c=document.createElement("button");return c.className="header-btn",c.textContent="Contact Us",a.append(r,n,c),a}
},{"../../../img/logo.svg":"OEkT","./homeHeader.css":"Owns"}],"w2gl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageHeader=r;var e=require("../../components/home/homeHeader/homeHeader");function r(){var r=document.createElement("header");r.className="header";var a=document.createElement("div");return a.className="container",r.append(a),a.append((0,e.getHomeHeader)()),r}require("./pageHeader.css");
},{"../../components/home/homeHeader/homeHeader":"J3Kx","./pageHeader.css":"Owns"}],"Ilqo":[function(require,module,exports) {
"use strict";function n(){var n=document.createElement("div");return n.classList.add("rating-1","rating-2"),n.innerHTML='\n        <div class="rating-block">\n            <span class="rating-span">350+</span>\n            <p class="rating-text texts">Project Completed</p>\n            <span class="rating-span">23+</span>\n            <p class="rating-text texts">Professional Teams</p>\n            <span class="rating-span">15+</span>\n            <p class="rating-text">Years Experience</p>\n        </div>\n    ',n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRating=n,require("./rating.css");
},{"./rating.css":"Owns"}],"uxOP":[function(require,module,exports) {
module.exports="/Dananz/main-bg.3a462a38.png";
},{}],"ALK8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHomeMain=s;var e=require("../../rating/rating"),n=i(require("../../../img/main-bg.png"));function i(e){return e&&e.__esModule?e:{default:e}}function s(){var i=document.createElement("section");i.className="section-main";var s=document.createElement("div");s.className="container";var a=document.createElement("div");return a.className="design-block",a.innerHTML='\n        <div class="desing-box">\n            <h1 class="design-title">Design your interor with high quality.</h1>\n            <div class="desing_box">\n                <span class="desing_box-span">2022</span>\n                <p class="desing_box-text">ALL RIGHT RESERVED</p>\n            </div>\n        </div>\n        <img class="desing-img" src="'.concat(n.default,'" alt="">\n    '),i.append(s),s.append(a,(0,e.getRating)()),i}require("./homeMain.css");
},{"../../rating/rating":"Ilqo","../../../img/main-bg.png":"uxOP","./homeMain.css":"Owns"}],"L1VQ":[function(require,module,exports) {
module.exports="/Dananz/about.8b6f267a.png";
},{}],"lKbH":[function(require,module,exports) {
module.exports="/Dananz/about-ellipse.ea41e920.png";
},{}],"ojeD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHomeAbout=t;var e=a(require("../../../img/about.png")),n=a(require("../../../img/about-ellipse.png"));function a(e){return e&&e.__esModule?e:{default:e}}function t(){var a=document.createElement("section");a.className="section-about";var t=document.createElement("div");t.className="container";var o=document.createElement("div");return o.className="about-block",o.innerHTML='\n        <p class="about-block_text">ABOUT</p>\n        <h2 class="about-block_title">\n            “We\'re one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”\n        </h2>\n        <div class="about-box">\n            <img class="about-img" src="'.concat(e.default,'" alt="">\n            <div class="about_box">\n                <p class="about_box-text">\n                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.\n                </p>\n                <button class="about_box-btn">Learn More</button>\n            </div>\n        </div>\n        <div class="block">\n            <img class="block-img" src="').concat(n.default,'" alt="">\n            <div class="blocks">\n                <h3 class="blocks-title">Arga Danaan</h3>\n                <p class="blocks-text">CEO of Dananz</p>\n            </div>\n        </div>\n    '),a.append(t),t.append(o),a}require("./homeAbout.css");
},{"../../../img/about.png":"L1VQ","../../../img/about-ellipse.png":"lKbH","./homeAbout.css":"Owns"}],"pANI":[function(require,module,exports) {
module.exports="/Dananz/arrowRight.c66e62a0.svg";
},{}],"k6ny":[function(require,module,exports) {
module.exports="/Dananz/service.ead33831.png";
},{}],"fxUz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHomeService=t;var e=i(require("../../../img/arrowRight.svg")),s=i(require("../../../img/service.png"));function i(e){return e&&e.__esModule?e:{default:e}}function t(){var i=document.createElement("section");i.className="section-service";var t=document.createElement("div");t.className="container";var c=document.createElement("div");return c.className="service-block",c.innerHTML='\n        <div class="service-box">\n            <p class="service-block_text">SERVICE</p>\n            <h2 class="service-block_title">attractive furniture with the best quality.</h2>\n            <p class="service-block-text">\n                Customize your interior design into a dream place with the best designers and quality furniture. \n                We try our best to fulfill your expectations.\n            </p>\n            <ol class="service-list">\n                <li class="service-item">\n                    <a class="service-link" href="#">\n                        <h3 class="service-title --title-1">Interior Design</h3>\n                        <img class="service-img" src="'.concat(e.default,'">\n                    </a>\n                </li>\n                <li class="service-item">\n                    <a class="service-link" href="#">\n                        <h3 class="service-title --title-2">Consultant</h3>\n                        <img class="service-img" src="').concat(e.default,'">\n                    </a>\n                </li>\n                <li class="service-item">\n                    <a class="service-link" href="#">\n                        <h3 class="service-title --title-3">Construction Consultant</h3>\n                        <img class="service-img" src="').concat(e.default,'">\n                    </a>\n                </li>\n            </ol>\n        </div>\n        <img class="service-block_img" src="').concat(s.default,'">\n    '),i.append(t),t.append(c),i}require("./homeService.css");
},{"../../../img/arrowRight.svg":"pANI","../../../img/service.png":"k6ny","./homeService.css":"Owns"}],"cp13":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageMain=t;var e=require("../../components/home/homeMain/homeMain"),o=require("../../components/home/homeAbout/homeAbout"),r=require("../../components/home/homeService/homeService");function t(){var t=document.createElement("main");return t.className="main",t.append((0,e.getHomeMain)(),(0,o.getHomeAbout)(),(0,r.getHomeService)()),t}require("./pageMain.css");
},{"../../components/home/homeMain/homeMain":"ALK8","../../components/home/homeAbout/homeAbout":"ojeD","../../components/home/homeService/homeService":"fxUz","./pageMain.css":"Owns"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./src/page/pageHeader/pageHeader.js"),a=require("./src/page/pageMain/pageMain.js"),r=document.querySelector("#app");r.append((0,e.getPageHeader)(),(0,a.getPageMain)());
},{"./src/page/pageHeader/pageHeader.js":"w2gl","./src/page/pageMain/pageMain.js":"cp13"}]},{},["Focm"], null)
//# sourceMappingURL=/Dananz/Dananz.6df0669d.js.map