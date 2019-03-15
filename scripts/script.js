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


$(document).ready(function(){

var url=document.location.href; $.each($(".languages ul li a"),function(){
  if(this.href==url){$(this).addClass('active-button');};
  });
});

