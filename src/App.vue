<template>
  <div id="app">
    <!-- NAV HIDE BAR -->
    <nav 
		id="nav-hide-page" 
		class="hide"
		@click="toggleNavHide">
      <ul>
        <li id="programas"><a class="cursor" @click.prevent="toProgramas">PROGRAMAS</a></li>
        <!--<li><a class="cursor">VIDEOS</a></li>-->
        <li><a class="cursor" @click.prevent="toContactos">CONTACTO</a></li>
        <li 
				id="live"
				@click.prevent="toggleLive">
					<a id="livee" class="main-color cursor">EN VIVO</a>
				</li>
        <li class="media"><a href="https://twitter.com/radioitam" title="twitter" target="_blank"><i id="twitter" class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
        <li class="media"><a href="https://www.facebook.com/radio.itam/" title="facebook" target="_blank"><i id="facebook" class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
        <li class="media"><a href="https://www.youtube.com/channel/UCg32eGxCoTuwVLNv-7k6L2g" title="youtube" target="_blank"><i id="youtube" class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a></li>
      </ul>
    </nav><!-- /NAV HIDE BAR -->

    <!-- MAIN HEADER-->
    <header id="header" class="main-header">
      <div class="header-img cursor" id="header-img" @click.prevent="toHome">
        <img src="~@/assets/RADIO-ITAM.png" alt="RADIO ITAM" class="imagenRadio">
      </div>
      <nav class="nav-display">
        <ul>
          <li><a id="programas2" class="cursor" @click.prevent="toProgramas" >PROGRAMAS</a></li>
          <!--<li><a class="cursor">VIDEOS</a></li>-->
          <li><a class="cursor" @click.prevent="toContactos">CONTACTO</a></li>
          <li @click.prevent="toggleLive">
						<a id="live2" class="main-color cursor">EN VIVO</a>
					</li>
        </ul>
      </nav>
      <nav class="nav-display social">
        <ul>
          <li>
            <a href="https://twitter.com/radioitam" title="twitter radio itam" target="_blank"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="https://www.facebook.com/radio.itam/" title="facebook radio itam" target="_blank"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCg32eGxCoTuwVLNv-7k6L2g" title="youtube radio itam" target="_blank"><i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
          </li>
        </ul>
      </nav>
      <nav class="nav-hide">
        <div 
				id="toggle-nav"
				@click.prevent="toggleNav">
          <span>
            =
          </span>
        </div>
      </nav>
    </header><!-- MAIN HEADER-->
    <router-view/>
		<div class="player hide" id="player">
			<iframe src="https://mixlr.com/users/6061859/embed?autoplay=true" width="100%" height="150px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>
	  </div>
  </div>
</template>

<script>
export default {

  name: 'app',
  methods : {
    toContactos () {
      this.$router.push({name: 'Contacto'});
    },
    toHome () {
      this.$router.push({name: 'Home'});
		},
		toProgramas () {
			this.$router.push({name: 'Programas'});
		},
		toggleNav () {
      $('#nav-hide-page').toggleClass('hide');
		},
		toggleNavHide (e) {
        if(!$(e.target).hasClass('fa'))
        {
            e.preventDefault();
        }
        $('#nav-hide-page').toggleClass('hide');
		},
		toggleLive () {
        $('#player').toggleClass('hide');
        $('#livee').toggleClass('red main-color');
        $('#live2').toggleClass('red main-color');
		}
  }
}
</script>

<style lang="scss">
#facebook{
	color: #3b5998;
}
#twitter{
	color: #1dcaff;
}
#youtube{
	color: #b31217;
}

.hide{
	display: none !important;
}

.display-on{
	display: block;
}
.display-off{
	display: none;
}
#toggle-nav{
	cursor: pointer;
}

.cursor{
	cursor: pointer !important;
}

@mixin width-height($w : 0,$h : 0){
    width: $w;
    height: $h;
}
html {
  @include width-height(100%,100%);
	margin: 0;
	padding: 81px 0 150px 0;
	font-size: 16px;
	font-family: 'Questrial', sans-serif;
	/*font-family: 'Open Sans Condensed', sans-serif;*/
	font-family: 'Josefin Slab', serif;
}
body {
  @include width-height(100%,100%);
	margin: 0;
}
body *{
	box-sizing: border-box;
}
nav ul li{
	list-style: none;
	display: inline-block;
}
li{
	list-style: none;
}
#app {
  @include width-height(100%,100%);
  margin: 0;
  padding: 0;
}

.main-header{
	background: #fff;
	position: fixed;
	top: 0;
	left: 0;
	height: 81px;
	width: 100%;
	border-bottom: 1px grey solid;
	z-index: 5;
}
.header-img{
	float: left;
	height: 80px;
	width: 250px;
	padding: 20px 0 21px 0;
	margin: 0;
}
.header-img img{
	margin-left: 50px;
	width: 200px;
	height: 40px;
}
.nav-hide{
	display: none;
}

.nav-display{
	margin: 0;
	padding: 30px 10px 31px 50px;
	height: 80px;
	float: left;
	ul{
		margin: 0;
		padding: 0;
		height: 20px;
		font-size: 16px;
		li{
			display: inline-block;
			margin-left: 32px;
			padding-top: 2px;
			padding-bottom: 2px;
			text-align: center;
			a{
				text-decoration: none;
				color: #aba4a4;
				&.red{
					color: red;
				}
				&.main-color{
					color: #aba4a4;
				}
				&:hover{
					color: #000;
				}
			}
		}
	}
}

.social{
	padding: 24px 10px 25px 35px;
	float: right;
}
.social ul li{
	margin-left: 20px;
}

#nav-hide-page{
	@include width-height(100%,100%);
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 8;
	background: rgba(10,10,10,0.5);
	overflow-x: hidden;
	ul{
		@include width-height(60%,100%);
		background: #fff;
		margin: 0 0 0 40%;
		padding: 0;
		/*
		add moz webkit ms etc....
		*/
		z-index: 10;
		border-top-left-radius: 20px;
		box-shadow: -10px 0 100px #000;
		li{
			display: block;
			padding-top: 20px;
			padding-bottom: 2px;
			padding-left: 50px;
			border-bottom: 0.5px lightgrey solid;
			font-size: 30px;
			&:hover{
				background: grey;
			}
			a{
				text-decoration: none;
				color: #aba4a4;
				&.red{
					color: red;
				}
				&.main-color{
					color: #aba4a4;
				}
				&:hover{
					color: #000;
				}
			}
		}
		.media{
				@include width-height(100%,64px);
				border: none;
				font-size: auto;
				padding: 0;
				text-align: center;
				margin-top: 40px;
				a{
					z-index: 9;
					margin-top: 15px;
					@include width-height(100%,64px);
					display: block;
					text-decoration: none;
				}
			}
	}
}

.player{
	width: 90%;
	margin-right: 5%;
	margin-left: 5%;
	padding: 0;
	position: fixed;
	bottom: 0;
	left: 0;
	border: 2px #F2F2F2 solid;
	display: block;
}

@media only screen and (max-width: 980px)
{
	.nav-display{
		display: none;
	}
	.nav-hide{
		display: block;
		float: right;
		margin: 0;
		padding: 20px 40px 21px 0;
		height: 80px;
	}
	.nav-hide div{
		text-align: center;
		width: auto;
		margin: 0;
		padding: 0;
		height: 40px;
		font-size: 36px;
		padding-top: 2px;
		padding-bottom: 2px;
		color: #000;
	}
	.nav-hide div span{
		height: 36px;
	}
	#nav-hide-page ul{
		width: 45%;
		margin-left: 55%;
	}
	#nav-hide-page ul li{
		padding-left: 30px;
  }
}

@media only screen and (max-width: 720px)
{
	#nav-hide-page ul{
		width: 80%;
		margin-left: 20%;
	}
	.header-img{
		width: 210px;
	}
	.header-img img{
		margin-left: 10px;
	}
	.nav-hide{
		padding: 20px 15px 21px 0;
	}
	#nav-hide-page ul li{
		padding-left: 10px;
  }
}
</style>
