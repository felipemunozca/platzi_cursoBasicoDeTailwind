/** Variables. **/
const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggle-sm");
const loginNav = document.querySelector("#loginNav");
const loginTab = document.querySelector("#loginTab");
const dialog = document.querySelector("#dialog");
const btnClose = document.querySelector("#btnClose");

/** Eventos. **/
toggleButton.addEventListener("click", () => toggleDarkMode());
toggleButtonSm.addEventListener("click", () => toggleDarkMode());
loginNav.addEventListener("click", () => showDialog());
loginTab.addEventListener("click", () => showDialog());
btnClose.addEventListener("click", () => closeDialog());

/** Funciones. **/
const toggleDarkMode = () => {
	htmlElement.classList.contains("dark") ? htmlElement.classList.remove("dark") : htmlElement.classList.add("dark");
}

const showDialog = () => {
    dialog.classList.remove("hidden");
    setTimeout(() => {
        dialog.classList.remove("opacity-0");
    }, 300);
}

const closeDialog = () => {
    dialog.classList.add("opacity-0");
    setTimeout(() => {
        dialog.classList.add("hidden");
    }, 500);
}

