function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "header__menu") {
       x.className += " responsive";
   } else {
       x.className = "header__menu";
   }
}