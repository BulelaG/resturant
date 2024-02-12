const popButton = document.getElementById("show-popup");

popButton.addEventListener("click", popUp);

function popUp() {
  alert("Button pressed");
  window.open("/popup.html", "login", "width:50,height:50");
}


