/***
 * @author Javier Bastande
 */

const closeIcon = document.getElementById("close-icon");
const burger = document.getElementById("burger");
const modalMenu = document.getElementById("navbar-modal");
const rectangle = document.getElementById("rectangle");
let firstSection = document.getElementsByTagName("section")[0];

/***
 * Listen to burger icon on click, and show modal menu
 */
burger.addEventListener("click", () => {
    firstSection.classList.remove("contentFadeIn");
    modalMenu.classList.remove("closeMenu");
    burger.classList.add("turnOn");
    modalMenu.classList.add("showMenu");
    rectangle.classList.add("popInRectangle");
    firstSection.classList.add("contentFadeOut");

})

/***
 * Listen to close icon on click, and hide modal menu
 */
closeIcon.addEventListener("click", () => {
    rectangle.classList.remove("popInRectangle");
    modalMenu.classList.remove("showMenu");
    firstSection.classList.add("contentFadeIn");
    modalMenu.classList.add("closeMenu");


})