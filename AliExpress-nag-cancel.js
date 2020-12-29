// ==UserScript==
// @name         Cancel AliExpress nag
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto-click the close button on the AliExpress nag popup
// @author       TheAtomicOption
// @match        *://*.aliexpress.com/*
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function () {
            document.getElementsByClassName('next-dialog-close').item(0).click()
    }, 1500);
})();
