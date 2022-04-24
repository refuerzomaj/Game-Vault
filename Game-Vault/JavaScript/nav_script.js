window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("nav-bar-top");
var sticky = navbar.offsetTop;

function navFunction() {
  if(navbar.className === "nav-bar sticky responsive" || navbar.className === "nav-bar responsive" || navbar.className === "nav-bar sticky responsive sticky_bg" || navbar.className === "nav-bar sticky sticky_bg responsive"){
    navbar.className = "nav-bar";
  }
  else if (navbar.className === "nav-bar" || navbar.classList.contains('sticky')) {
    navbar.className += " responsive";
  }
}

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    if(window.pageYOffset === 100){
      navbar.classList.add("sticky_bg");
    }
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky_bg");
  }
}