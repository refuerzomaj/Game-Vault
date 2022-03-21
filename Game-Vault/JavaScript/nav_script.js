function myFunction() {
    var x = document.getElementById("nav-bar-top");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
}