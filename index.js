window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar navbar-expand-sm bg-dark navbar-darkr");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}