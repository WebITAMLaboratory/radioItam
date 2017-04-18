//   document.getElementById("ModuloUno").style.display = 'none';
//   document.getElementById("ModuloDos").style.display = 'none';
//   document.getElementById("ModuloTres").style.display = 'none';

//   document.getElementById("ModuloUnoDos").style.display = 'none';
//   document.getElementById("ModuloDosDos").style.display = 'none';
//   document.getElementById("ModuloTresDos").style.display = 'none';

//   document.getElementById("ModuloUnoTres").style.display = 'none';
//   document.getElementById("ModuloDosTres").style.display = 'none';
//   document.getElementById("ModuloTresTres").style.display = 'none';

//   var x =document.getElementById("ModuloPrincipalBoton");
//   var y =document.getElementById("ModuloUnoBoton");
//   var z =document.getElementById("ModuloDosBoton");
//   var w =document.getElementById("ModuloTresBoton");
//   x.onclick = function() {modulos(0)};
//   y.onclick = function() {modulos(1)};
//   z.onclick = function() {modulos(2)};
//   w.onclick = function() {modulos(3)};

// function modulos(i){
//   switch (i) {
//     case 0:
//         document.getElementById("ModuloPrincipal").style.display = 'block';
//         document.getElementById("ModuloUno").style.display = 'none';
//         document.getElementById("ModuloDos").style.display = 'none';
//         document.getElementById("ModuloTres").style.display = 'none';

//         document.getElementById("ModuloUnoDos").style.display = 'none';
//         document.getElementById("ModuloDosDos").style.display = 'none';
//         document.getElementById("ModuloTresDos").style.display = 'none';

//         document.getElementById("ModuloUnoTres").style.display = 'none';
//         document.getElementById("ModuloDosTres").style.display = 'none';
//         document.getElementById("ModuloTresTres").style.display = 'none';

//         break;
//     case 1:
//           document.getElementById("ModuloPrincipal").style.display = 'none';
//           document.getElementById("ModuloUno").style.display = 'block';
//           document.getElementById("ModuloDos").style.display = 'block';
//           document.getElementById("ModuloTres").style.display = 'block';

//           document.getElementById("ModuloUnoDos").style.display = 'none';
//           document.getElementById("ModuloDosDos").style.display = 'none';
//           document.getElementById("ModuloTresDos").style.display = 'none';

//           document.getElementById("ModuloUnoTres").style.display = 'none';
//           document.getElementById("ModuloDosTres").style.display = 'none';
//           document.getElementById("ModuloTresTres").style.display = 'none';
//         break;
//     case 2:
//           document.getElementById("ModuloPrincipal").style.display = 'none';
//           document.getElementById("ModuloUno").style.display = 'none';
//           document.getElementById("ModuloDos").style.display = 'none';
//           document.getElementById("ModuloTres").style.display = 'none';

//           document.getElementById("ModuloUnoDos").style.display = 'block';
//           document.getElementById("ModuloDosDos").style.display = 'block';
//           document.getElementById("ModuloTresDos").style.display = 'block';

//           document.getElementById("ModuloUnoTres").style.display = 'none';
//           document.getElementById("ModuloDosTres").style.display = 'none';
//           document.getElementById("ModuloTresTres").style.display = 'none';
//         break;
//     case 3:          
//     document.getElementById("ModuloPrincipal").style.display = 'none';
//     document.getElementById("ModuloUno").style.display = 'none';
//     document.getElementById("ModuloDos").style.display = 'none';
//     document.getElementById("ModuloTres").style.display = 'none';

//     document.getElementById("ModuloUnoDos").style.display = 'none';
//     document.getElementById("ModuloDosDos").style.display = 'none';
//     document.getElementById("ModuloTresDos").style.display = 'none';

//     document.getElementById("ModuloUnoTres").style.display = 'block';
//     document.getElementById("ModuloDosTres").style.display = 'block';
//     document.getElementById("ModuloTresTres").style.display = 'block';
//   }
// }
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }



// Toggle Function for navbar =====================
  document.getElementById("toggle-nav").addEventListener("click",function(){
    if(document.getElementById("nav-hide-page").classList.contains("display-off"))
    {
      document.getElementById("nav-hide-page").classList.remove("display-off");
      document.getElementById("nav-hide-page").classList.add("display-on");
    }
    else
    {
      document.getElementById("nav-hide-page").classList.remove("display-on");
      document.getElementById("nav-hide-page").classList.add("display-off");
    }
  });
// END Toggle function for navbar //===============
//=================================================

// Close event for navbar =====================
  document.getElementById("nav-hide-page").addEventListener("click",function(){
    if(this.classList.contains("display-off"))
    {
      this.classList.remove("display-off");
      this.classList.add("display-on");
    }
    else
    {
      this.classList.remove("display-on");
      this.classList.add("display-off");
    }
  });
// END Close event for navbar //===============
//=================================================

