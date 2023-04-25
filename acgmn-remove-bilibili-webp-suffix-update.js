// ==UserScript==
// @name         Remove Bilibili WebP Suffix
// @namespace    ACGMN
// @version      0.1.0
// @description  Remove gift panel from bilibili live page 去除b站图片webp后缀
// @author       ACGMN
// @license      MIT
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
    }, 100)
})();
