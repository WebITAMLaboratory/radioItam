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
    
    //===============================CHECK WINDOWS SIZE FOR APIS ===================================================
        if($(document).width() <= 498){
            var size = Math.round($(document).width() * 0.9);
            $('#facebookApi').attr('src','https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fradio.itam%2F&tabs=timeline&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId&width='+size+'&height=500');
        }
    //==========================END ONCLICK PROGRAMA EVENT===========================================================================
    //===============================================================================================================================

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
        if(!$(e.target).hasClass('fa'))
        {
            e.preventDefault();
        }
        $('#nav-hide-page').toggleClass('hide');
    });
    // =====================END Close event for navbar //=========================
    //=============================================================================

    //======================Open event of player =================================
    //============================================================================
    $('#live').on('click',function(e){
        e.preventDefault();
        $('#player').toggleClass('hide');
        $('#livee').toggleClass('red main-color');
        $('#live2').toggleClass('red main-color');
    });
    $('#live2').on('click',function(e){
        e.preventDefault();
        $('#player').toggleClass('hide');
        $('#livee').toggleClass('red main-color');
        $('#live2').toggleClass('red main-color');
    });
    // ======================END Open event of player //==============================
    //=================================================================================

    //========================Change event for programas =====================
    //=================================================================================
    $('#programas').on('click',function(e){
        e.preventDefault();
        if(!$('#radio').hasClass('active'))
        {
            $('.active').each(function(){
                $(this).toggleClass('active');
            });
            $('#radio').toggleClass('active');
        }
        $(document).scrollTop(0);
        //GET OBJECT SOUNDCLOUD AND CHANGE LOAD PROPERTY
    });
    $('#programas2').on('click',function(e){
        e.preventDefault();
        if(!$('#radio').hasClass('active'))
        {
            $('.active').each(function(){
                $(this).toggleClass('active');
            });
            $('#radio').toggleClass('active');
        }
        $(document).scrollTop(0);
        //GET OBJECT SOUNDCLOUD AND CHANGE LOAD PROPERTY
    });
    //========================END Open event of player //================================================
    //====================================================================================================

    // ========================Change event for main =====================================================
    //=====================================================================================================
    $('#header-img').on('click',function(e){
        e.preventDefault();
        if(!$('#carrousel').hasClass('active'))
        {
            $('.active').each(function(){
                $(this).toggleClass('active');
            });
            $('#carrousel').toggleClass('active');
            $('#general').toggleClass('active');
            $('#youtubeApi').toggleClass('active');
            $('#facebookApi').toggleClass('active');
        }
        $(document).scrollTop(0);
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

