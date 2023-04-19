//set up hover effect:
$(".image-gallery-home article").on("mouseover", function() {
  console.log("mose is over");
  $(this).find(".div-filter").css("display", "inherit");
  $(this).find("h4").css("visibility", "visible");
});
$(".image-gallery-home article").on("mouseout", function() {
  console.log("mose is out");
  $(this).find(".div-filter").css("display", "none");
  $(this).find("h4").css("visibility", "hidden");
});











navStatus=false;//false means nav is closed(hide), vice versa
/* Set the width of the side navigation to 250px */
function openNav() {
  $("nav").css("top","0");
  console.log("open");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $("nav").css("top","-100vh");
  console.log("close!");
}

function handleHamburgerClick(){
  if(!navStatus)openNav();
  else closeNav();
  navStatus=!navStatus;
}


