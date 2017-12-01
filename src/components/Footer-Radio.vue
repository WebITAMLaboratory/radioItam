<template>

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

</template>

<script>
export default {
  name: 'Footer-Radio',
  data(){
      return{
          
      }
  },
}
</script>

<style lang="scss" scoped>
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
</style>


