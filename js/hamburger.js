function hamburger() {
    // get nav-container
    const overlay = document.getElementById("overlay");
    const overlayHide = document.getElementById("overlay-hide");
    const button = document.getElementById("hamburger-button");
    const icon = document.getElementById("hamburger-icon");
    if (overlay.className === "overlay") {
        // add responsive class
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        overlay.className += " responsive";
        overlay.style.width = "100%";
        overlayHide.className += " responsive";
        button.className += " responsive";
        icon.className = "fa fa-close";
        icon.style.animation = "unset";
    } else {
        // remove responsive class
        overlay.className = "overlay";
        overlay.style.width = "0";
        overlayHide.className = "overlay-hide";
        button.className = "nav-hamburger nav-button";
        icon.className = "fa fa-bars";
        icon.style.animation = "rotate1 300ms ease"
    }
}

const overlay = document.getElementById("overlay");
const overlayHide = document.getElementById("overlay-hide");
const button = document.getElementById("hamburger-button");
const icon = document.getElementById("hamburger-icon");


swup.on("contentReplaced", bar);
function bar() {
    overlay.className = "overlay";
    overlay.style.width = "0";
    overlayHide.className = "overlay-hide";
    button.className = "nav-hamburger nav-button";
    icon.className = "fa fa-bars";
    icon.style.animation = "rotate1 300ms ease"
}