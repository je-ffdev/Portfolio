var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById("arrow-up").style.display = "none";
document.getElementById("arrow-down").style.display = "none";

// hide the arrow icons by default
document.getElementById("arrow-up").style.display = "none";
document.getElementById("arrow-down").style.display = "none";

// check the scroll position and show the arrow icons as needed
window.onscroll = function () {
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;

    // show the arrow up icon if the user is not at the top of the page
    if (scrollTop > 0) {
        document.getElementById("arrow-up").style.display = "block";
    } else {
        document.getElementById("arrow-up").style.display = "none";
    }

    // show the arrow down icon if the user is not at the bottom of the page
    if (scrollTop + clientHeight < scrollHeight) {
        document.getElementById("arrow-down").style.display = "block";
    } else {
        document.getElementById("arrow-down").style.display = "none";
    }
};
document
    .getElementById("arrow-up")
    .addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
document
    .getElementById("arrow-down")
    .addEventListener("click", function () {
        window.scrollTo(0, document.body.scrollHeight);
    });

function toggleMenu() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("open");
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active");

    // Add or remove the 'fixed' class from the hamburger icon
    if (hamburger.classList.contains("active")) {
        hamburger.classList.add("fixed");
    } else {
        hamburger.classList.remove("fixed");
    }
}

