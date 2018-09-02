"use strict";

window.addEventListener("DOMContentLoaded", init);

let text;
let position;

function init() {
    console.log("init");

    // Get original text
    text = document.querySelector("#scroller").textContent;

    // clear the original text from HTML
    document.querySelector("#scroller").textContent = "";

    // start at position 0
    position = 0;

    // start the loop
    setTimeout(loop, 100);
}

function loop() {
    console.log("loop");

    // create the new text as a piece of the old one - 40 characters long
    const newText = text.substring(position, position+40);

    // display the new text
    document.querySelector("#scroller").textContent = newText;

    // move to the next character
    position++;

    // when we reach the end, start from the beginning
    if( position > text.length ) {
        position = 0;
    }

    // loop the loop
    setTimeout(loop, 100);
}