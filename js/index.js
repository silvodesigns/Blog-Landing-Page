function mobileMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function closeOpen(id) {
    //close other dropdowns if open, so there is only one at a time showing
    var toClose = document.querySelectorAll(".dropdown_mobile");
    for (let i = 0; i < toClose.length; i++) {
        if (toClose[i].id != id) {
            toClose[i].style.display = "none"
        }


    }



}

function changeIcon(id) {
    var icon = document.querySelector(".dropdown_title_mobile#" + id + " > #change");
    icon.classList.toggle("rotate_arrow");

}

function dropdownMenu(id) {
    var toDisplay = document.querySelector(".dropdown_mobile#" + id);
    closeOpen(id);
    changeIcon(id);
    if (toDisplay.style.display === "block") {
        toDisplay.style.display = "none";
    } else {
        toDisplay.style.display = "block";
    }


}

var showDropdown = function (e) {
    const toShow = document.querySelector(".dropdown_title + .nested_ul");
    toShow.classList.toggle("dropdown_hover");
    console.log(toShow);
}
