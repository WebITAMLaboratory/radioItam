<template>
	<div class="Programas">
		<section class="categorias">
			<ul>
				<li>
					<p @click.prevent="openEntreten" id="BtnCultura">Cultura<span>/</span>Entretenimiento</p>
					<ul id="entretenimientoMin">
						<li class="cursor" id="Radiola"><p>GLUTEN FREE</p></li>
						<li class="cursor" id="SARCOSMICO"><p>MAL DEL PUERCO</p></li>
						<li class="cursor" id="YNosotrosQue"><p>CINI CINE</p></li>
						
					</ul>
				</li>

				<li>
					<p @click.prevent="openDep" id="BtnDeportes">Deportes</p>
					<ul id="deportesMin">
						<li class="cursor" id="Radiola"><p>CUARTA Y UNA</p></li>
						<li class="cursor" id="SARCOSMICO"><p>LOS SUPLENTES</p></li>
						<li class="cursor" id="YNosotrosQue"><p>TIEMPO AGREGADO</p></li>
					</ul>
				</li>
				
				<li>
					<p @click.prevent="openNot" id="BtnNoticias">Noticias y política</p>
					<ul id="noticiasMin">
						<li class="cursor" id="GGNewsM"><p>GG NEWS</p></li>
						<li class="cursor" id="LaMesaM"><p>CENTRO DE ESTUDIOS ALONSO LUJAMBIO</p></li>
						<li class="cursor" id="ChilaquilesConHuevosM"><p>LA CAPITAL</p></li>
						<li class="cursor" id="MalDelPuercoM"><p>LA ASAMBLEA</p></li>
					</ul>
				</li>
			</ul>
		</section>

		<section id="clases-programas" class="programas">
			<ul id="entretenimiento" v-bind:class="{show: showEntreten}">
				<li class="cursor" id="Radiola"><p>GLUTEN FREE</p></li>
				<li class="cursor" id="SARCOSMICO"><p>MAL DEL PUERCO</p></li>
				<li class="cursor" id="YNosotrosQue"><p>CINI CINE</p></li>
			</ul>

			<ul id="deportesMin" v-bind:class="{show: showDep}">
				<li class="cursor" id="Radiola"><p>CUARTA Y UNA</p></li>
				<li class="cursor" id="SARCOSMICO"><p>LOS SUPLENTES</p></li>
				<li class="cursor" id="YNosotrosQue"><p>TIEMPO AGREGADO</p></li>
			</ul>

			<ul id="noticias" v-bind:class="{show: showNot}">
				<li class="cursor" id="GGNewsM"><p>GG NEWS</p></li>
				<li class="cursor" id="LaMesaM"><p>CENTRO DE ESTUDIOS ALONSO LUJAMBIO</p></li>
				<li class="cursor" id="ChilaquilesConHuevosM"><p>LA CAPITAL</p></li>
				<li class="cursor" id="MalDelPuercoM"><p>LA ASAMBLEA</p></li>
			</ul>
		</section>
		
	</div>
</template>

<script>
export default {
  name: 'Programas',
  data () {
    return {
		showEntreten: false,
		showNot : false,
		showDep : false
    }
  },
  methods: {
    openEntreten : function (){
		if (this.showNot == false && this.showDep == false){
			this.showEntreten = !this.showEntreten;
		}
		if (this.showNot == true && this.showDep == false){
			this.showNot = false;
			this.showEntreten = !this.showEntreten;
		}
		if (this.showNot == false && this.showDep == true){
			this.showDep = false;
			this.showEntreten = !this.showEntreten;
		}
	},
	openNot : function (){
		if (this.showEntreten == false && this.showDep == false){
			this.showNot = !this.showNot;
		}
		if (this.showEntreten == true && this.showDep == false){
			this.showEntreten = false;
			this.showNot = !this.showNot;
		}
		if (this.showEntreten == false && this.showDep == true){
			this.showDep = false;
			this.showNot = !this.showNot;
		}
	},
	openDep : function(){
		if (this.showEntreten == false && this.showNot == false){
			this.showDep = !this.showDep;
		}
		if (this.showEntreten == true && this.showNot == false){
			this.showEntreten = false;
			this.showDep = !this.showDep;
		}
		if (this.showEntreten == false && this.showNot == true){
			this.showNot = false;
			this.showDep = !this.showDep;
		}
	}
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

.show{
	display: block !important;
}

.Programas {
    @include width-height(100%,100%);
    width: 100%;
	height: 750px;
	padding: 0;
	margin: 0;
}

.categorias{
	width: 60%;
	padding: 0;
	margin: 0;
	float: left;
	ul{
		margin: 0;
		padding: 0 0 0 40px;
		font-size: 50px;
		li{
			display: block;
			padding-top: 20px;
			color: #000;
			p{
				background: #fff;
				display: inline-block;
				padding: 2px;
				&:hover{
					-webkit-border-radius: 0 20px 0 20px;
					-moz-border-radius: 0 20px 0 20px;
					-ms-border-radius: 0 20px 0 20px;
					-o-border-radius: 0 20px 0 20px;
					border-radius: 0 20px 0 20px;
					background: #d7d7d7;
				}
				span{
					color: red;
				}
			}
			ul{
				height: 0;
				display: none;
				&.active{
					height: auto;
					display: block;
				}
				li{
					height: 0;
				}
			}
		}
	}
}
.programas{
	width: 40%;
	padding: 0;
	margin: 0;
	background: #d7d7d7;
	float: left;
	display: block;
	ul{
		margin: 0;
		padding: 0 0 0 40px;
		font-size: 25px;
		display: none;
		&.active{
			display: block;
		}
		li{
			display: block;
			padding-top: 5px;
			color: #969696;
			font-weight: bold;
		}
	}
}
#programas,#programas2{
	cursor: pointer;
}
#header-img{
	cursor: pointer;
}
#BtnDeportes,#BtnCultura,#BtnNoticias{
	cursor: pointer;
}
#contacts,#contacts2{
	cursor: pointer;
}
#culturaEntretenimiento{
	display: none;
	&.active{
		display: block;
	}
	section{
		width: 100%;
		ul{
			width: 90%;
			padding: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
}

@media only screen and (max-width: 980px)
{.categorias{
		@include width-height(100%,auto);
		padding: 0;
		margin: 0;
		text-align: center;
		ul{
			margin: 0;
			padding: 0 0 0 0;
			font-size: 30px;
			li{
				display: block;
				padding-top: 20px;
				color: #000;
				p{
					background: #fff;
					display: inline-block;
					padding: 2px;
					-webkit-border-radius: 0 20px 0 20px;
					-moz-border-radius: 0 20px 0 20px;
					-ms-border-radius: 0 20px 0 20px;
					-o-border-radius: 0 20px 0 20px;
					background: #d7d7d7;
					span{
						color: red;
					}
				}
				ul{
					li{
						padding:0;
						font-size: 18px;
						background: #d7d7d7;
						border-bottom:1px solid black;
						transition: 1s;
						overflow: hidden;
						p{
							background: none;
						}
					}
				}
			}
		}
	}
	.programas{
		display: none;
    }
}

</style>