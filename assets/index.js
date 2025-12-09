/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
!function(){"use strict";window.addEventListener("DOMContentLoaded",()=>{const o=()=>{const o=document.body.querySelector("#mainNav");o&&(0===window.scrollY?o.classList.remove("navbar-shrink"):o.classList.add("navbar-shrink"))};o(),document.addEventListener("scroll",o);document.body.querySelector("#mainNav")&&window.bootstrap&&bootstrap.ScrollSpy&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",rootMargin:"0px 0px -40%"});const e=document.body.querySelector(".navbar-toggler");Array.prototype.slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).forEach(o=>{o.addEventListener("click",()=>{e&&"none"!==window.getComputedStyle(e).display&&e.click()})})})}();