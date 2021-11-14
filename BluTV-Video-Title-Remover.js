// ==UserScript==
// @name         BluTV FullScreen Title Remover
// @namespace    https://tampermonkey.net
// @version      0.1
// @description  try to take over the world!
// @author       MSTZ
// @match        https://www.blutv.com/*
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(function() {
    'use strict';
    window.addEventListener('load', function () {
        sleep(5000).then(() => {
            try{
                if(document.getElementsByClassName("vjs-title-control") !== null){
                    document.getElementsByClassName("vjs-title-control")[0].hidden = true;
                }
            }catch{
                console.log("TamperMonkey: Not a video page!");
            }
        });
    })
})();
