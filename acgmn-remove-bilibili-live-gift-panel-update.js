// ==UserScript==
// @name         Remove Bilibili Live Gift Panel
// @namespace    ACGMN
// @version      0.1.3
// @description  Remove gift panel from bilibili live page 去除b站直播间礼物面板
// @author       ACGMN
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/ACGNnsj/TampermonkeyScripts/main/acgmn-remove-bilibili-live-gift-panel-update.js
// @updateURL    https://raw.githubusercontent.com/ACGNnsj/TampermonkeyScripts/main/acgmn-remove-bilibili-live-gift-panel-update.js
// @match        *://live.bilibili.com/*
// @icon         https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://live.bilibili.com&size=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(function () {
        if(document.querySelector('#web-player__bottom-bar__container')){
            document.querySelector('#web-player__bottom-bar__container').remove()
        }
        if(document.querySelector('#gift-control-vm')){
            document.querySelector('#gift-control-vm').remove()
        }
    }, 1000)
})();
