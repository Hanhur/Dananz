// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/img/logo.svg":[function(require,module,exports) {
module.exports = "/logo.cabda74f.svg";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/components/home/homeHeader/homeHeader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/home/homeHeader/homeHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeHeader = getHomeHeader;
var _logo = _interopRequireDefault(require("../../../img/logo.svg"));
require("./homeHeader.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var headerArray = ["Home", "About Us", "Services", "Our Teams"];
function getHomeHeader() {
  var homeHeader = document.createElement("div");
  homeHeader.className = "home-header";
  var homeHeaderImg = document.createElement("img");
  homeHeaderImg.className = "header-img";
  homeHeaderImg.src = _logo.default;
  homeHeaderImg.alt = "Dananz";
  var homeHeaderList = document.createElement("ul");
  homeHeaderList.className = "header-list";
  headerArray.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "header-items";
    var link = document.createElement("a");
    link.className = "header-link";
    link.href = "#";
    homeHeaderList.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var homeHeaderButton = document.createElement("button");
  homeHeaderButton.className = "header-btn";
  homeHeaderButton.textContent = "Contact Us";
  homeHeader.append(homeHeaderImg, homeHeaderList, homeHeaderButton);
  return homeHeader;
}
},{"../../../img/logo.svg":"src/img/logo.svg","./homeHeader.css":"src/components/home/homeHeader/homeHeader.css"}],"src/page/pageHeader/pageHeader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageHeader/pageHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageHeader = getPageHeader;
var _homeHeader = require("../../components/home/homeHeader/homeHeader");
require("./pageHeader.css");
function getPageHeader() {
  var header = document.createElement("header");
  header.className = "header";
  var container = document.createElement("div");
  container.className = "container";
  header.append(container);
  container.append((0, _homeHeader.getHomeHeader)());
  return header;
}
},{"../../components/home/homeHeader/homeHeader":"src/components/home/homeHeader/homeHeader.js","./pageHeader.css":"src/page/pageHeader/pageHeader.css"}],"src/components/rating/rating.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/rating/rating.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRating = getRating;
require("./rating.css");
function getRating() {
  var rating = document.createElement("div");
  rating.classList.add("rating-1", "rating-2");
  rating.innerHTML = "\n        <div class=\"rating-block\">\n            <span class=\"rating-span\">350+</span>\n            <p class=\"rating-text texts\">Project Completed</p>\n            <span class=\"rating-span\">23+</span>\n            <p class=\"rating-text texts\">Professional Teams</p>\n            <span class=\"rating-span\">15+</span>\n            <p class=\"rating-text\">Years Experience</p>\n        </div>\n    ";
  return rating;
}
},{"./rating.css":"src/components/rating/rating.css"}],"src/img/main-bg.png":[function(require,module,exports) {
module.exports = "/main-bg.13403173.png";
},{}],"src/components/home/homeMain/homeMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/home/homeMain/homeMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeMain = getHomeMain;
var _rating = require("../../rating/rating");
var _mainBg = _interopRequireDefault(require("../../../img/main-bg.png"));
require("./homeMain.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getHomeMain() {
  var section = document.createElement("section");
  section.className = "section-main";
  var container = document.createElement("div");
  container.className = "container";
  var designBlock = document.createElement("div");
  designBlock.className = "design-block";
  designBlock.innerHTML = "\n        <div class=\"desing-box\">\n            <h1 class=\"design-title\">Design your interor with high quality.</h1>\n            <div class=\"desing_box\">\n                <span class=\"desing_box-span\">2022</span>\n                <p class=\"desing_box-text\">ALL RIGHT RESERVED</p>\n            </div>\n        </div>\n        <img class=\"desing-img\" src=\"".concat(_mainBg.default, "\" alt=\"\">\n    ");
  section.append(container);
  container.append(designBlock, (0, _rating.getRating)());
  return section;
}
},{"../../rating/rating":"src/components/rating/rating.js","../../../img/main-bg.png":"src/img/main-bg.png","./homeMain.css":"src/components/home/homeMain/homeMain.css"}],"src/img/about.png":[function(require,module,exports) {
module.exports = "/about.09a40596.png";
},{}],"src/img/about-ellipse.png":[function(require,module,exports) {
module.exports = "/about-ellipse.35d1b548.png";
},{}],"src/components/home/homeAbout/homeAbout.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/home/homeAbout/homeAbout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeAbout = getHomeAbout;
var _about = _interopRequireDefault(require("../../../img/about.png"));
var _aboutEllipse = _interopRequireDefault(require("../../../img/about-ellipse.png"));
require("./homeAbout.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getHomeAbout() {
  var section = document.createElement("section");
  section.className = "section-about";
  var container = document.createElement("div");
  container.className = "container";
  var homeAboutBlock = document.createElement("div");
  homeAboutBlock.className = "about-block";
  homeAboutBlock.innerHTML = "\n        <p class=\"about-block_text\">ABOUT</p>\n        <h2 class=\"about-block_title\">\n            \u201CWe're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.\u201D\n        </h2>\n        <div class=\"about-box\">\n            <img class=\"about-img\" src=\"".concat(_about.default, "\" alt=\"\">\n            <div class=\"about_box\">\n                <p class=\"about_box-text\">\n                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.\n                </p>\n                <button class=\"about_box-btn\">Learn More</button>\n            </div>\n        </div>\n        <div class=\"block\">\n            <img class=\"block-img\" src=\"").concat(_aboutEllipse.default, "\" alt=\"\">\n            <div class=\"blocks\">\n                <h3 class=\"blocks-title\">Arga Danaan</h3>\n                <p class=\"blocks-text\">CEO of Dananz</p>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(homeAboutBlock);
  return section;
}
},{"../../../img/about.png":"src/img/about.png","../../../img/about-ellipse.png":"src/img/about-ellipse.png","./homeAbout.css":"src/components/home/homeAbout/homeAbout.css"}],"src/page/pageMain/pageMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageMain/pageMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageMain = getPageMain;
var _homeMain = require("../../components/home/homeMain/homeMain");
var _homeAbout = require("../../components/home/homeAbout/homeAbout");
require("./pageMain.css");
function getPageMain() {
  var main = document.createElement("main");
  main.className = "main";
  main.append((0, _homeMain.getHomeMain)(), (0, _homeAbout.getHomeAbout)());
  return main;
}
},{"../../components/home/homeMain/homeMain":"src/components/home/homeMain/homeMain.js","../../components/home/homeAbout/homeAbout":"src/components/home/homeAbout/homeAbout.js","./pageMain.css":"src/page/pageMain/pageMain.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _pageHeader = require("./src/page/pageHeader/pageHeader.js");
var _pageMain = require("./src/page/pageMain/pageMain.js");
var app = document.querySelector("#app");
app.append((0, _pageHeader.getPageHeader)(), (0, _pageMain.getPageMain)());
},{"./src/page/pageHeader/pageHeader.js":"src/page/pageHeader/pageHeader.js","./src/page/pageMain/pageMain.js":"src/page/pageMain/pageMain.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36513" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Dananz.e31bb0bc.js.map