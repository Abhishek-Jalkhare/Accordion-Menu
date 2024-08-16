var menu = document.querySelector(".menu");
var submenu;
var id;
var arr = [0,2,3,2]
var sb1 = document.querySelector(".sb1");
var brd = document.querySelector(".brd");
menu.addEventListener("click", function (event) {
  if (event.target.classList.contains("options")) {
      if(submenu){
        submenu.style.height = "0"
      } 
      id = event.target.id;
      submenu = document.querySelector(".c"+id);
        submenu.style.height =  arr[id]*60 + "px";
  }
});
