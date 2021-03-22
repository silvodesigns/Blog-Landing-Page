function mobileMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function closeOpen(id) {
    var toClose = document.querySelectorAll(".dropdown_mobile");
    for (let i = 0; i < toClose.length; i++) {
        if (toClose[i].id != id) {
            toClose[i].style.display = "none"
        }


    }



}

function dropdownMenu(id) {
    var toDisplay = document.querySelector(".dropdown_mobile#" + id);
    closeOpen(id)
    if (toDisplay.style.display === "block") {
        toDisplay.style.display = "none";
    } else {
        toDisplay.style.display = "block";
    }


}