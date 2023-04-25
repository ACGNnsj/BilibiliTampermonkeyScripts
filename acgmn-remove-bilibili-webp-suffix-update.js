// ==UserScript==
// @name         Remove Bilibili WebP Suffix
// @namespace    ACGMN
// @version      0.1.1
// @description  Remove gift panel from bilibili live page 去除b站图片webp后缀
// @author       ACGMN
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/ACGNnsj/RemoveBilibiliLiveGiftPanel/main/acgmn-remove-bilibili-webp-suffix-update.js
// @updateURL    https://raw.githubusercontent.com/ACGNnsj/RemoveBilibiliLiveGiftPanel/main/acgmn-remove-bilibili-webp-suffix-update.js
// @match        *://i0.hdslb.com/*
// @icon         https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://i0.hdslb.com&size=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(function () {
        if(location.href.endsWith('webp')){
            location.href = location.href.substring(0,location.href.lastIndexOf('@'))
        }
    }, 1000)
})();
