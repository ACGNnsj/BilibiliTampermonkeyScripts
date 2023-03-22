// ==UserScript==
// @name         Remove Bilibili Live Gift Panel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove gift panel from bilibili live page
// @author       ACGMN
// @downloadURL  https://raw.githubusercontent.com/ACGNnsj/RemoveBilibiliLiveGiftPanel/main/acgmn-remove-bilibili-live-gift-panel-update.js
// @updateURL    https://raw.githubusercontent.com/ACGNnsj/RemoveBilibiliLiveGiftPanel/main/acgmn-remove-bilibili-live-gift-panel-update.js
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
