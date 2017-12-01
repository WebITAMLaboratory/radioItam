<template>
  <div class="Contacto">
    <div class="contactos">
        
        <div class="contacto">
            <figure>
                <img src="~@/assets/rafa.jpg" alt="Rafael Ramírez Caro">
                <figcaption>Rafael Ramírez Caro</figcaption>
            </figure>
            <p>	
                Actual Director de Radio ITAM <br>
                Rafael ha sido parte del equipo de Radio ITAM, fungiendo como Director de RRPP, CRTV y Coordinador de Eventos Especiales. <br>
                Participando activamente en la coordinación del proyecto de "Innovación Tecnológica CRTV"
            </p>
        </div>
        
        <footer>
            <div class="redes">
                <p>
                    <a href="mailto:crtv@itam.mx?subject=Mail de CRTV.ITAM.MX"><i class="fa fa-envelope" aria-hidden="true"></i>crtv@itam.mx</a>
                </p>
                <p>
                    <a href="https://twitter.com/radioitam" title="twitter" target="_blank"><i id="twitter" class="fa fa-twitter"></i>@RadioITAM</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/radio.itam/" title="facebook" target="_blank"><i id="facebook" class="fa fa-facebook"></i>@radio.itam</a>
                </p>
                <p>
                    <a href="https://www.youtube.com/channel/UCg32eGxCoTuwVLNv-7k6L2g" title="youtube" target="_blank"><i id="youtube" class="fa fa-youtube-play"></i>Radio ITAM</a>
                </p>
            </div>
            <p class="address">
                    ITAM Campus Rio Hondo <br>
                    Río Hondo #1 <br>
                    Col. Progreso Tizapán <br>
                    CP. 01080. Álvaro Obregón, <br>
                    Ciudad de México <br>
            </p>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data () {
    return {
      slideIndex: 1,
      contactos : [
        {
            
        }
      ]
    }
  },
  methods: {
    
  },
  created () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin width-height($w : 0,$h : 0){
    width: $w;
    height: $h;
}

.Contacto {
    @include width-height(100%,100%);
}
/*=======================================================
// CONTACTOS
=======================================================*/
.contactos{
	@include width-height(100%,100%);
	margin: 0;
	padding: 0;
	.contacto{
		@include width-height(100%,auto);
		margin: 30px 0 0 0;
		padding: 0;
		&:nth-child(even){
			background: #D7D7D7;
		}
		&:nth-child(1){
			margin:0;	
		}
		figure{
			@include width-height(256px,286px);
			padding-top: 10px;
			margin-left: auto;
			margin-right: auto;
			img{
				@include width-height(256px,256px);
				-webkit-border-radius: 0 20px 0 20px;
				-moz-border-radius: 130px;
				-ms-border-radius: 130px;
				-o-border-radius: 130px;
				border-radius: 130px;
			}
			figcaption{
				font-size: 20px;
				text-align: center;
			}
		}
		p{
			text-align: center;
			font-size: 18px;
		}
	}
	footer{
		@include width-height(100%,180px);
		background: #1f1b1b;
		.redes{
			@include width-height(50%,180px);
			float: left;
			text-align: center;
			a{
				font-size: 18px;
				color: white;
				#facebook{
					color: #3b5998;
				}
				#twitter{
					color: #1dcaff;
				}
				#youtube{
					color: #b31217;
				}
			}
		}
		.address{
			@include width-height(50%,180px);
			font-size: 18px;
			float: left;
			text-align: center;
			color: white;
		}
	}
}
#contacts,#contacts2{
	cursor: pointer;
}
</style>

