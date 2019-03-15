var open = document.querySelector("#mobMenu");
var link = document.querySelector(".menu");
var close = document.querySelector(".mobail-menu-close");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
	link.classList.remove("responsive");
	close.classList.remove("mobmenu-close-block");
	open.classList.remove("mobail-menuopen");
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(document).ready(function(){

var url=document.location.href; $.each($(".languages ul li a"),function(){
  if(this.href==url){$(this).addClass('active-button');};
  });
});

