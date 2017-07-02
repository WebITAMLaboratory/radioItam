import '../css/main.scss';

import $ from './jquery';

$(document).ready(function(){
    var slideIndex = 1;

    (function carrouselTurn()
    {
        var slides = $('#carrousel').find('img');
        if (slideIndex > slides.length){slideIndex = 1}    
        if (slideIndex < 1) {slideIndex = slideslength} 
        slides.each(function(){
            if(!$(this).hasClass('hide'))
            {
                $(this).addClass('hide');
            }
        });
        $(slides[slideIndex - 1]).toggleClass('hide');
        slideIndex++;
        setTimeout(carrouselTurn,4400);
    })();

    //=====================Toggle Function for navbar =====================
    //=====================================================================
    $('#toggle-nav').on('click',function(e){
        e.preventDefault();
        $('#nav-hide-page').toggleClass('hide');
    });
    //=====================END Toggle function for navbar==========================
    //=============================================================================

    //=====================Close event for navbar =====================
    //=============================================================================
    $('#nav-hide-page').on('click',function(e){
        e.preventDefault();
        $('#nav-hide-page').toggleClass('hide');
    });
    // =====================END Close event for navbar //=========================
    //=============================================================================

    //======================Open event of player =================================
    //============================================================================
    document.getElementById("live").addEventListener("click",function()
    {
    if(document.getElementById("player").classList.contains("display-off"))
    {
        document.getElementById("player").classList.remove("display-off");
        document.getElementById("player").classList.add("display-on");
        document.getElementById("livee").style.color = "red";
        document.getElementById("live2").style.color = "red";
    }else
    {
        document.getElementById("player").classList.remove("display-on");
        document.getElementById("player").classList.add("display-off");
        document.getElementById("livee").style.color = "#aba4a4";
        document.getElementById("live2").style.color = "#aba4a4";
    }
    });
    document.getElementById("live2").addEventListener("click",function()
    {
    if(document.getElementById("player").classList.contains("display-off"))
    {
        document.getElementById("player").classList.remove("display-off");
        document.getElementById("player").classList.add("display-on");
        document.getElementById("livee").style.color = "red";
        document.getElementById("live2").style.color = "red";
    }else
    {
        document.getElementById("player").classList.remove("display-on");
        document.getElementById("player").classList.add("display-off");
        document.getElementById("livee").style.color = "#aba4a4";
        document.getElementById("live2").style.color = "#aba4a4";
    }
    });
    // ======================END Open event of player //==============================
    //=================================================================================

    //========================Change event for programas =====================
    //=================================================================================
    document.getElementById("programas").addEventListener("click",function()
    {
    if(document.getElementById("radio").classList.contains("display-off"))
    {
        document.getElementById("radio").classList.remove("display-off");
        document.getElementById("radio").classList.add("display-on");
        document.getElementById("carrousel").classList.remove("display-on");
        document.getElementById("carrousel").classList.remove("display-off");
        document.getElementById("carrousel").classList.add("display-off");
        document.getElementById("culturaEntretenimiento").classList.remove("display-on");
        document.getElementById("culturaEntretenimiento").classList.remove("display-off");
        document.getElementById("culturaEntretenimiento").classList.add("display-off");
        document.getElementById("iframeJs").src = "";
    }
    });
    document.getElementById("programas2").addEventListener("click",function()
    {
    if(document.getElementById("radio").classList.contains("display-off"))
    {
        document.getElementById("radio").classList.remove("display-off");
        document.getElementById("radio").classList.add("display-on");
        document.getElementById("carrousel").classList.remove("display-on");
        document.getElementById("carrousel").classList.remove("display-off");
        document.getElementById("carrousel").classList.add("display-off");
        document.getElementById("culturaEntretenimiento").classList.remove("display-on");
        document.getElementById("culturaEntretenimiento").classList.remove("display-off");
        document.getElementById("culturaEntretenimiento").classList.add("display-off");
        document.getElementById("iframeJs").src = "";
    }
    });
    //========================END Open event of player //================================================
    //====================================================================================================

    // ========================Change event for main =====================================================
    //=====================================================================================================
    document.getElementById("header-img").addEventListener("click",function()
    {
    if(document.getElementById("carrousel").classList.contains("display-off"))
    {
        document.getElementById("carrousel").classList.remove("display-off");
        document.getElementById("carrousel").classList.add("display-on");
        document.getElementById("radio").classList.remove("display-on");
        document.getElementById("radio").classList.remove("display-off");
        document.getElementById("radio").classList.add("display-off");
        document.getElementById("culturaEntretenimiento").classList.remove("display-on");
        document.getElementById("culturaEntretenimiento").classList.remove("display-off");
        document.getElementById("culturaEntretenimiento").classList.add("display-off");
        document.getElementById("iframeJs").src = "";
    }
    });
    //=======================END Open event of main //======================================================
    //======================================================================================================

    //========================Display deportes event =======================================================
    //======================================================================================================
    document.getElementById("BtnDeportes").addEventListener("click",function()
    {
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
    ////====================END Display deportes event //=//==================================================
    //========================================================================================================

    //==========================Display cultura event =======================================================
    //======================================================================================================
    document.getElementById("BtnCultura").addEventListener("click",function()
    {
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
    //==============================END Display cultura event======================================================
    //=============================================================================================================

    // =============================================IFRAME URLS OBJECT ============================================
    //=============================================================================================================
    var iframes =
    {
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
    //===============================END Display cultura event==========================================================================================
    //==================================================================================================================================================

    //===============================ONCLICK PROGRAMA EVENT ===================================================
    function quitaPon(titulo)
    {
    if(document.getElementById("culturaEntretenimiento").classList.contains("display-off"))
        {
        document.getElementById("culturaEntretenimiento").classList.remove("display-off");
        document.getElementById("culturaEntretenimiento").classList.add("display-on");
        }
        document.getElementById("ProgrmasJS").classList.remove("display-off");
        document.getElementById("ProgrmasJS").classList.add("display-on");
        document.getElementById("radio").classList.remove("display-on");
        document.getElementById("radio").classList.add("display-off");
        document.getElementById("titulo").innerHTML = titulo;
        document.getElementById("iframeJs").src = iframes[titulo];
    }
    //==========================END ONCLICK PROGRAMA EVENT===========================================================================
    //===============================================================================================================================

});

