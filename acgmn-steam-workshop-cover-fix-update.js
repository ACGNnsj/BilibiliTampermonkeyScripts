// ==UserScript==
// @name         Steam Workshop Cover Fix
// @namespace    ACGMN
// @version      0.1
// @author       ACGMN
// @license      MIT
// @match        https://steamcommunity.com/sharedfiles/filedetails/?id=*
// @match        https://steamcommunity.com/workshop/filedetails/?id=*
// @downloadURL  https://raw.githubusercontent.com/ACGNnsj/TampermonkeyScripts/main/acgmn-steam-workshop-cover-fix-update.js
// @updateURL    https://raw.githubusercontent.com/ACGNnsj/TampermonkeyScripts/main/acgmn-steam-workshop-cover-fix-update.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function () {
        if(typeof onYouTubeIframeAPIReady === 'function') {
            onYouTubeIframeAPIReady();
        }
    }, 1000)
})();
