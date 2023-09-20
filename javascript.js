function myFunction() {
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");

    if (show.style.display === "block") {
        show.style.display = "none";
        hide.style.display = "block";
        hide.style.border = "2px solid #0A66C2";
        hide.style.background = "#0a66c21f";
    } else {
        hide.style.display = "none";
        show.style.display = "block";
        show.style.border = "2px solid #0A66C2";
        show.style.background = "#0a66c21f";
    }
}

