// ==UserScript==
// @name         Remove Excessive Etsy Search Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove excessive Etsy ads from search results
// @author       TheAtomicOption
// @match        http*://www.etsy.com/search*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    window.onload = function (){
        $('.ad-iindicator').css('background', 'red');
        $('.ad-iindicator').parents('li.wt-list-unstyled').hide();
    };
})();
