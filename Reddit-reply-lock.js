// ==UserScript==
// @name         Reddit locked thread set reply link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  turns reply links to 🔒<s>reply</s> for locked threads so you don't forget and click one while scrolling
// @author       TheAtomicOption
// @match        https://*.reddit.com/*/comments/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function lockForLockedThreads() {
        if ($('.locked-infobar').length > 0){
            $('a.locked-error.access-required').html('🔒<s>reply</s>');
        }
    }
    const commentObserver = new MutationObserver(lockForLockedThreads);
    const commentConfig = { attributes: false, childList:true, subtree: false };
    commentObserver.observe(document.getElementsByClassName('sitetable nestedlisting')[0],commentConfig);
    lockForLockedThreads();
})();
