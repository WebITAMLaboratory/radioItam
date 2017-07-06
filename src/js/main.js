import '../css/main.scss';

import $ from './jquery';

import './soundcloud';

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
        if($(document).width() <= 500){
            var size = Math.round($(document).width() * 0.9);
            $('#facebookApi iframe').attr('src','https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fradio.itam%2F&tabs=timeline&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId&width='+size+'&height=500');
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
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.pause();
        widget = null;
        socl = null;
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
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.pause();
        widget = null;
        socl = null;
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
    $('#contacts').on('click',function(e){
        e.preventDefault();
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.pause();
        widget = null;
        socl = null;
        if(!$('#contactos').hasClass('active'))
        {
            $('.active').each(function(){
                $(this).toggleClass('active');
            });
            $('#contactos').toggleClass('active');
        }
        $(document).scrollTop(0);
        //GET OBJECT SOUNDCLOUD AND CHANGE LOAD PROPERTY
    });
    $('#contacts2').on('click',function(e){
        e.preventDefault();
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.pause();
        widget = null;
        socl = null;
        if(!$('#contactos').hasClass('active'))
        {
            $('.active').each(function(){
                $(this).toggleClass('active');
            });
            $('#contactos').toggleClass('active');
        }
        $(document).scrollTop(0);

        //GET OBJECT SOUNDCLOUD AND CHANGE LOAD PROPERTY
    });
    // ========================Change event for main =====================================================
    //=====================================================================================================
    $('#header-img').on('click',function(e){
        e.preventDefault();
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.pause();
        widget = null;
        socl = null;
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

    //========================Display noticias event =======================================================
    //======================================================================================================
    $('#BtnNoticias').on('click',function(e){
        e.preventDefault();
        if($(document).width() <= 980)
        {
            var timeout = 0;
            if(!$('#noticiasMin').hasClass('active'))
            {
                clearTimeout(timeout);
                $('#noticiasMin').toggleClass('active');
                $('#BtnNoticias').css('background','#B9B9B9');
                $('#noticiasMin li').each(function(){
                    $(this).height(60);
                });
            }
            else
            {
                $('#BtnNoticias').css('background','#D7D7D7');
                var lis = $('#noticiasMin li');
                var i = 0;
                lis.each(function(){
                    i += 1; 
                    $(this).height(0);
                    if( i == lis.length)
                    {
                        timeout = setTimeout(function(){
                            $('#noticiasMin').toggleClass('active');
                        },900);
                    }
                });
            } 
        }
        else
        {
            $('#noticias').toggleClass('active');
            if($('#entretenimiento').hasClass('active'))
            {
                $('#entretenimiento').toggleClass('active');
            }
        }
    });
    ////====================END Display noticias event //=//==================================================
    //========================================================================================================

    //==========================Display cultura event =======================================================
    //======================================================================================================
    $('#BtnCultura').on('click',function(e){
        e.preventDefault();
        if($(document).width() <= 980)
        {
            var timeout = 0;
            if(!$('#entretenimientoMin').hasClass('active'))
            {
                clearTimeout(timeout);
                $('#entretenimientoMin').toggleClass('active');
                $('#BtnCultura').css('background','#B9B9B9');
                $('#entretenimientoMin li').each(function(){
                    $(this).height(60);
                });
            }
            else
            {
                $('#BtnCultura').css('background','#D7D7D7');
                var lis = $('#entretenimientoMin li');
                var i = 0;
                lis.each(function(){
                    i += 1; 
                    $(this).height(0);
                    if( i == lis.length)
                    {
                        timeout = setTimeout(function(){
                            $('#entretenimientoMin').toggleClass('active');
                        },900);
                    }
                });
            } 
        }
        else
        {
            $('#entretenimiento').toggleClass('active');
            if($('#noticias').hasClass('active'))
            {
                $('#noticias').toggleClass('active');
            }
        }
    });
    //==============================END Display cultura event======================================================
    //=============================================================================================================

    // =============================================IFRAME URLS OBJECT ============================================
    //=============================================================================================================
    var iframes =
    {
    Radiola:"https%3A//api.soundcloud.com/playlists/278674724&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    SARCOSMICO:"https%3A//api.soundcloud.com/playlists/297113879&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    YNosotrosQue:"https%3A//api.soundcloud.com/playlists/298421586&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    HablemosDeGenero:"https%3A//api.soundcloud.com/playlists/298421310&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    CiniCine:"https%3A//api.soundcloud.com/playlists/106949861&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    MassiveChisme:"https%3A//api.soundcloud.com/playlists/299733155&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    PortalDelCine:"https%3A//api.soundcloud.com/playlists/317226833&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    CatadorPorAccidente:"https%3A//api.soundcloud.com/playlists/301513500&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    GGNews:"https%3A//api.soundcloud.com/playlists/298421694&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    LaMesa:"https%3A//api.soundcloud.com/playlists/301513627&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    ChilaquilesConHuevos:"https%3A//api.soundcloud.com/playlists/298421115&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    MalDelPuerco:"https%3A//api.soundcloud.com/playlists/301513745&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    ElCapital:"https%3A//api.soundcloud.com/playlists/298421456&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    LaSobreMesa:"https%3A//api.soundcloud.com/playlists/299009168&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    LosGuapoliticos:"https%3A//api.soundcloud.com/playlists/298421793&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
    };
    //===============================END Display cultura event==========================================================================================
    //==================================================================================================================================================

    //===============================ONCLICK PROGRAMA EVENT ===================================================
    function quitaPon(titulo)
    {
        /*
        if(!$('#closeSound').hasClass('on'))
        {
            $('#closeSound').toggleClass('on');
        }
        */
        var options = {
            auto_play :false,
            buying:	true,	
            liking:	true,	
            download:	true,	
            sharing:	true,	
            show_artwork:	true,	
            show_comments:	true,	
            show_playcount:	true,	
            show_user:	true,	
            start_track:0
        };
        $('#culturaEntretenimiento').toggleClass('active');
        $('#radio').toggleClass('active');
        var socl = document.getElementById('iframeJs');
        var widget = SC.Widget(socl.id);
        widget.load(iframes[titulo],options);
        //document.getElementById("iframeJs").src = iframes[titulo];
    }
    //==========================END ONCLICK PROGRAMA EVENT===========================================================================
    //===============================================================================================================================
    $('#Radiola').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('Radiola');
    });
    $('#RadiolaM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('Radiola');
    });
    $('#SARCOSMICO').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('SARCOSMICO');
    });
    $('#SARCOSMICOM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('SARCOSMICO');
    });
    $('#YNosotrosQue').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('YNosotrosQue');
    });
    $('#YNosotrosQueM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('YNosotrosQue');
    });
    $('#HablemosDeGenero').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('HablemosDeGenero');
    });
    $('#HablemosDeGeneroM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('HablemosDeGenero');
    });
    $('#CiniCine').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('CiniCine');
    });
    $('#CiniCineM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('CiniCine');
    });
    $('#MassiveChisme').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('MassiveChisme');
    });
    $('#MassiveChismeM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('MassiveChisme');
    });
    $('#PortalDelCine').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('PortalDelCine');
    });
    $('#PortalDelCineM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('PortalDelCine');
    });
    $('#CatadorPorAccidente').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('CatadorPorAccidente');
    });
    $('#CatadorPorAccidenteM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('CatadorPorAccidente');
    });
    $('#GGNews').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('GGNews');
    });
    $('#GGNewsM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('GGNews');
    });
    $('#LaMesa').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('LaMesa');
    });
    $('#LaMesaM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('LaMesa');
    });
    $('#ChilaquilesConHuevos').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('ChilaquilesConHuevos');
    });
    $('#ChilaquilesConHuevosM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('ChilaquilesConHuevos');
    });
    $('#MalDelPuerco').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('MalDelPuerco');
    });
    $('#MalDelPuercoM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('MalDelPuerco');
    });
    $('#ElCapital').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('ElCapital');
    });
    $('#ElCapitalM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('ElCapital');
    });
    $('#LaSobreMesa').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('LaSobreMesa');
    });
    $('#LaSobreMesaM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('LaSobreMesa');
    });
    $('#LosGuapoliticos').on('click',function(){
        $('#BtnCultura').css('background','#FFFFFF');
        $('#BtnNoticias').css('background','#FFFFFF');
        quitaPon('LosGuapoliticos');
    });
    $('#LosGuapoliticosM').on('click',function(){
        $('#BtnCultura').css('background','#D7D7D7');
        $('#BtnNoticias').css('background','#D7D7D7');
        quitaPon('LosGuapoliticos');
    });
});
