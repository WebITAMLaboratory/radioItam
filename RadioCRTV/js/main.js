var slideIndex = 1;
showDivs();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("demo");
  if (slideIndex > x.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  //for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" w3-white", "");
  //}
  x[slideIndex-1].style.display = "block";
  slideIndex++;  
  setTimeout(showDivs,3500);
  //dots[slideIndex-1].className += " w3-white";
}



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

// Open event of player =====================
  document.getElementById("live").addEventListener("click",function(){
    if(document.getElementById("player").classList.contains("display-off"))
    {
      document.getElementById("player").classList.remove("display-off");
      document.getElementById("player").classList.add("display-on");
      document.getElementById("livee").style.color = "red";
      document.getElementById("live2").style.color = "red";
    }
    else
    {
      document.getElementById("player").classList.remove("display-on");
      document.getElementById("player").classList.add("display-off");
      document.getElementById("livee").style.color = "#aba4a4";
      document.getElementById("live2").style.color = "#aba4a4";
    }
  });

  document.getElementById("live2").addEventListener("click",function(){
    if(document.getElementById("player").classList.contains("display-off"))
    {
      document.getElementById("player").classList.remove("display-off");
      document.getElementById("player").classList.add("display-on");
      document.getElementById("livee").style.color = "red";
      document.getElementById("live2").style.color = "red";
    }
    else
    {
      document.getElementById("player").classList.remove("display-on");
      document.getElementById("player").classList.add("display-off");
      document.getElementById("livee").style.color = "#aba4a4";
      document.getElementById("live2").style.color = "#aba4a4";
    }
  });
// END Open event of player //===============
//=================================================

// Change event for programas =====================
  document.getElementById("programas").addEventListener("click",function(){
    if(document.getElementById("radio").classList.contains("display-off"))
    {
      document.getElementById("radio").classList.remove("display-off");
      document.getElementById("radio").classList.add("display-on");
      document.getElementById("carrousel").classList.remove("display-on");
      document.getElementById("carrousel").classList.add("display-off");
    }
  });

  document.getElementById("programas2").addEventListener("click",function(){
    if(document.getElementById("radio").classList.contains("display-off"))
    {
      document.getElementById("radio").classList.remove("display-off");
      document.getElementById("radio").classList.add("display-on");
      document.getElementById("carrousel").classList.remove("display-on");
      document.getElementById("carrousel").classList.add("display-off");
    }
  });
// END Open event of player //===============
//=================================================

// Change event for main =====================
  document.getElementById("header-img").addEventListener("click",function(){
    if(document.getElementById("carrousel").classList.contains("display-off"))
    {
      document.getElementById("carrousel").classList.remove("display-off");
      document.getElementById("carrousel").classList.add("display-on");
      document.getElementById("radio").classList.remove("display-on");
      document.getElementById("radio").classList.add("display-off");
    }
  });
// END Open event of main //===============
//=================================================

// Display deportes event =====================
  document.getElementById("BtnDeportes").addEventListener("click",function(){
    if(document.getElementById("clases-programas").classList.contains("display-off"))
    {
      document.getElementById("clases-programas").classList.remove("display-off");
      document.getElementById("clases-programas").classList.add("display-on");
    }
    document.getElementById("deportes").classList.remove("display-off");
    document.getElementById("deportes").classList.remove("display-on");
    document.getElementById("deportes").classList.add("display-on");
    document.getElementById("entretenimiento").classList.remove("display-on");
    document.getElementById("entretenimiento").classList.remove("display-off");
    document.getElementById("entretenimiento").classList.add("display-off");
  });
// END Display deportes event //===============
//=================================================

// Display deportes event =====================
  document.getElementById("BtnCultura").addEventListener("click",function(){
    if(document.getElementById("clases-programas").classList.contains("display-off"))
    {
      document.getElementById("clases-programas").classList.remove("display-off");
      document.getElementById("clases-programas").classList.add("display-on");
    }
    document.getElementById("deportes").classList.remove("display-on");
    document.getElementById("deportes").classList.remove("display-off");
    document.getElementById("deportes").classList.add("display-off");
    document.getElementById("entretenimiento").classList.remove("display-off");
    document.getElementById("entretenimiento").classList.remove("display-on");
    document.getElementById("entretenimiento").classList.add("display-on");
  });
// END Display deportes event //===============