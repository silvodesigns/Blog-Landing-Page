function mobileMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function closeOpen(id, selector, medium) {
    //close other dropdowns if open, so there is only one at a time showing
    var toClose = document.querySelectorAll(selector);
    if (medium === "mobile") {
        for (let i = 0; i < toClose.length; i++) {
            if (toClose[i].id != id) {
                toClose[i].style.display = "none"
            }


        }
    }
    if (medium === "desktop") {
        for (let i = 0; i < toClose.length; i++) {
            var toCheck = document.querySelectorAll(selector + "+" + ".nested_ul");
            if (toClose[i].id != id && toCheck[i].classList.contains("dropdown_hover")) {
                toCheck[i].classList.remove("dropdown_hover");

            }


        }


    }



}

function changeIcon(id, medium) {
    var icon;
    if (medium === "mobile") {
        icon = document.querySelector(".dropdown_title_mobile#" + id + " > #change");

    }
    if (medium === "desktop") {
        icon = document.querySelector(".dropdown_title#" + id + " > #change");

    }

    icon.classList.toggle("rotate_arrow");

}

function dropdownMenu(id) {
    var toDisplay = document.querySelector(".dropdown_mobile#" + id);
    closeOpen(id, ".dropdown_mobile", "mobile");
    changeIcon(id, "mobile");
    if (toDisplay.style.display === "block") {
        toDisplay.style.display = "none";
    } else {
        toDisplay.style.display = "block";
    }


}

var showDropdown = function (e) {
    const toShow = document.querySelector("#" + e.id + "+" + ".nested_ul");
    toShow.classList.toggle("dropdown_hover");
    closeOpen(e.id, ".dropdown_title", "desktop");
    changeIcon(e.id, "desktop");

}
