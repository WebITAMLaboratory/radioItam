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


var iframes ={
  Radiola:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/278674724&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  SARCÓSMICO:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297113879&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  YNosotrosQue:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  HablemosDeGénero:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421310&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  CiniCine:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/106949861&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  MassiveChisme:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/299733155&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  PortalDelCine:"jajatemamaste",
  CatadorPorAccidente:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513500&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  GGNews:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421694&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  LaMesa:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513627&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
  ChilaquilesConHuevos:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421115&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  MalDelPuerco:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513745&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  ElCapital:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421456&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  LaSobreMesa:"jajatemamaste",
  LosGuapoliticos:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421793&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
  };

  var radiola =document.getElementById("btnRadiola");
  var SARCOSMICO = document.getElementById("btnSarcosmico");
  var YNosotrosQue = document.getElementById("btnYNosotrosQue");
  var HablemosDeGénero = document.getElementById("btnHablemosDeGenero");
  var CiniCine = document.getElementById("btnCiniCine");
  var MassiveChisme = document.getElementById("btnMassiveChisme");
  var PortalDelCine= document.getElementById("btnPortalDelCine");
  var CatadorPorAccidente = document.getElementById("btnCatadorPorAcidente");
  var GGNews = document.getElementById("btnGgNews");
  var LaMesa = document.getElementById("btnLaMesa");
  var ChilaquilesConHuevos = document.getElementById("btnChilaquilesConHuevo");
  var MalDelPuerco = document.getElementById("btnMalDelPuerco");
  var ElCapital = document.getElementById("btnElCapital");
  var LaSobreMesa = document.getElementById("btnLaSobremesa");
  var LosGuapoliticos = document.getElementById("btnLosGuapoliticos");

if (radiola) {
  radiola.addEventListener("click",function(){
      var titulo="Radiola";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (SARCOSMICO) {
  SARCOSMICO.addEventListener("click",function(){
      var titulo="SARCOSMICO";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (YNosotrosQue) {
  YNosotrosQue.addEventListener("click",function(){
      var titulo="YNosotrosQue";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (HablemosDeGénero) {
  HablemosDeGénero.addEventListener("click",function(){
      var titulo="HablemosDeGénero";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (CiniCine) {
  CiniCine.addEventListener("click",function(){
      var titulo="CiniCine";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (MassiveChisme) {
  MassiveChisme.addEventListener("click",function(){
      var titulo="MassiveChisme";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (PortalDelCine) {
  PortalDelCine.addEventListener("click",function(){
      var titulo="PortalDelCine";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (CatadorPorAccidente) {
  CatadorPorAccidente.addEventListener("click",function(){
      var titulo="CatadorPorAccidente";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (GGNews) {
  GGNews.addEventListener("click",function(){
      var titulo="GGNews";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (LaMesa) {
  LaMesa.addEventListener("click",function(){
      var titulo="LaMesa";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (ChilaquilesConHuevos) {
  ChilaquilesConHuevos.addEventListener("click",function(){
      var titulo="ChilaquilesConHuevos";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (MalDelPuerco) {
  MalDelPuerco.addEventListener("click",function(){
      var titulo="MalDelPuerco";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (ElCapital) {
  ElCapital.addEventListener("click",function(){
      var titulo="ElCapital";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (LaSobreMesa) {
  PortalDelCine.addEventListener("click",function(){
      var titulo="LaSobreMesa";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}
if (LosGuapoliticos) {
  LosGuapoliticos.addEventListener("click",function(){
      var titulo="LosGuapoliticos";
      var ifra=iframes[titulo];
      quitaPon(titulo,ifra);
    });
}


function quitaPon(titulo,ifra){
  if(document.getElementById("culturaEntretenimiento").classList.contains("display-off"))
    {
      document.getElementById("culturaEntretenimiento").classList.remove("display-off");
      document.getElementById("culturaEntretenimiento").classList.add("display-on");
      document.getElementById("ProgrmasJS").classList.remove("display-off");
      document.getElementById("ProgrmasJS").classList.add("display-on");
      document.getElementById("radio").classList.remove("display-on");
      document.getElementById("radio").classList.add("display-off");
      document.getElementById("titulo").innerHTML = titulo;
      document.getElementById("iframeJs").src = ifra;
    }
}

//iframes // =====================================

/*
*============Cultura/Entretenimiento==============
*/
//Radiola 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/278674724&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//SARCÓSMICO 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297113879&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//Y, ¿nosotros qué? 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

//Hablemos de Género 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421310&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//Cini-Cine 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/106949861&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//Massive Chisme 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/299733155&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//Portal Del Cine
//jajatemamaste

//Catador por accidente 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513500&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

/*
*============Deportes==============
*/

//GG News
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421694&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//La Mesa
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513627&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//Chilaquiles Con Huevos
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421115&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

//Mal del puerco 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301513745&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//El Capital 
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421456&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

//La Sobre Mesa
//jajatemamaste

//Los Guapolíticos
//<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/298421793&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>



