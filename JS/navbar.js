var shown;
shown = false;
function navPopout() {
    if (shown == false) {
        document.getElementById('menuPopout').style.display = "block";
        document.getElementById('nav').style.width = "137px";
        document.getElementById('menuImage').src = "Images/leftMenuIcon.png";
        shown = true;
    } else if (shown == true) {
        document.getElementById('menuPopout').style.display = "none";
        document.getElementById('nav').style.width = "60px";
        document.getElementById('menuImage').src = "Images/menuIcon.png";
        shown = false;
    } else {
        alert("Error: navPopout()");
    }
}