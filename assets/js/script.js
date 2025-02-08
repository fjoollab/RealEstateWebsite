'use strict';

/**
 *  navbar toggle in mobile
 */

const /**{NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /**{NodeElement} */ $navTogglex = document.querySelector("[data-nav-togglex]");

$navTogglex.addEventListener("click", () => $navbar.classList.toggle("active"));


/**
 * navbar scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add to favorite toggle
 */

const /** {toggleList}*/ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => { 
        $toggleBtn.classList.toggle("active");

    });

});