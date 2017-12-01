<template>
  <div class="home">
    <section id="carrousel" class="carrousel active">
        <img class="mySlides fade" src="~@/assets/CAMARA.png" style="width:100%">
        <img class="mySlides fade hide" src="~@/assets/MICROFONO.png" style="width:100%">
        <img class="mySlides fade hide" src="~@/assets/CERVEZA.png" style="width:100%">
        <img class="mySlides fade hide" src="~@/assets/LIBROS.png" style="width:100%">
    </section>
    <section id="general" class="general active">
        <h1>This is Radio<span style="color:red;">I</span>TAM</h1>
        <p>
            Somos una radio universitaria hecha por y para la <br> 
            comunidad de estudiantes del ITAM. Nuestra labor es <br> 
            informar de la vida en el ITAM y dar voz a todos los <br> 
            estudiantes de nuestra comunidad. 
        </p>
    </section>
    <section id="youtubeApi" class="youtube active">
        <!--RadioITAM-->
        <iframe src="http://www.youtube.com/embed?max-results=1&controls=1&showinfo=0&rel=0&listType=user_uploads&list=RadioITAM" frameborder="0" allowfullscreen></iframe>
    </section>
    <section id="facebookApi" class="facebook active">
        <!--https://developers.facebook.com/docs/plugins/embedded-video-player#configurator-->
        <iframe id="facebookApi" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fradio.itam%2F&tabs=timeline&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId&width=860&height=500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      slideIndex: 1
    }
  },
  methods: {
    carrouselTurn () {
        var vm = this;
        var slides = $('#carrousel').find('img');
        if (vm.slideIndex > slides.length){vm.slideIndex = 1}    
        if (vm.slideIndex < 1) {vm.slideIndex = slides.length} 
        slides.each(function(){
            if(!$(this).hasClass('hide'))
            {
                $(this).addClass('hide');
            }
        });
        $(slides[vm.slideIndex - 1]).toggleClass('hide');
        vm.slideIndex++;
        setTimeout(vm.carrouselTurn,4400);
    }
  },
  created () {
    this.carrouselTurn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin width-height($w : 0,$h : 0){
    width: $w;
    height: $h;
}

.home {
    @include width-height(100%,100%);
}
/*=======================================================
// FACEBOOK API
=======================================================*/
.facebook{
	@include width-height(100%,520px);
	text-align: center;
	margin-top: 40px;
	padding-top: 10px;
	padding-bottom: 10px;
	background: #cfcfcf;
	display: none;
	&.active{
		display: block;
	}
	iframe{
		@include width-height(498px,520px);
		margin-left: auto;
		margin-right: auto;
	}
}
/*=======================================================
// YOUTUBE API
=======================================================*/
.youtube{
	@include width-height(100%,auto);
	text-align: center;
	margin-top: 40px;
	margin-bottom: 20px;
	display: none;
	&.active{
		display: block;
	}
	iframe{
		@include width-height(498px,auto);
		margin-left: auto;
		margin-right: auto;
	}
}
/*=======================================================
// CARROUSEL
=======================================================*/

.carrousel{
	@include width-height(100%,650px);
	display: none;
	&.active{
		display: block;
	}
	img{
		max-height: 650px;
		@include width-height(100%,100%);
	}
}
.fade{
	-webkit-animation-name: fade;
	-webkit-animation-duration: 4.5s;
	-moz-animation-name: fade;
	-moz-animation-duration: 4.5s;
	-ms-animation-name: fade;
	-ms-animation-duration: 4.5s;
	-o-animation-name: fade;
	-o-animation-duration: 4.5s;
	animation-name: fade;
	animation-duration: 4.5s;
}
@-webkit-keyframes fade{
	0% {opacity: 0}
	75% {opacity: 1}
	100% {opacity: 0}
}
@keyframes fade{
	0% {opacity: 0}
	75% {opacity: 1}
	100% {opacity: 0}
}

/*=======================================================
// GENERAL INFO
=======================================================*/

.general{
	display: none;
	text-align: center;
	&.active{
		display: block;
	}
	h1{
		font-size: 55px;
		padding-top: 10px;
		padding-bottom: 10px;
		background: #cfcfcf;
		span{
			color: red;
		}
	}
	p{
		font-size: 30px;
	}
}

@media only screen and (max-width: 720px)
{
	.carrousel{
		@include width-height(100%,200px);
	}
	.general{
		text-align: center;
		h1{
			font-size: 40px;
			span{
				color: red;
			}
		}
		p{
			font-size: 20px;
		}
	}
}

@media only screen and (max-width: 500px)
{
	.facebook{
		@include width-height(100%,520px);
		text-align: center;
		margin-top: 40px;
		iframe{
			@include width-height(90%,520px);
			margin-left: auto;
			margin-right: auto;
		}
	}

	.youtube{
		@include width-height(100%,auto);
		text-align: center;
		margin-top: 40px;
		margin-bottom: 20px;
		iframe{
			@include width-height(90%,auto);
			margin-left: auto;
			margin-right: auto;
		}
	}
}
</style>

