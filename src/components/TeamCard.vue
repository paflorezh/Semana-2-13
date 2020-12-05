<template>
    <div>
        <!-- <h2 class="tituloGrande"> {{ titulo }} </h2> -->
        <!-- <img src="./richard.jpg" alt=""> -->
        <!-- <p class="txt_c"> {{ titulo }} </p> -->
        <!-- <div class="row"> -->
            <!-- <div class="col-5"> -->
                <img v-bind:src= "member.image" alt="Images Equipo" class="team-imagenPerfil " >
                    <h3 class="titulos">Team member: {{member.codigo}} {{member.rol}} </h3>
                    <p class="parrafo"> {{ member.nombre }} </p>
                    <span class="descripcion"> {{ member.descripcion }}
                    </span>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>


<script>


export default {
  name: 'TeamCard',
  props: ['member']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* INICIA CODIGO ESTILO TEAMCARD */


.txt_c{
  font-size: 40px;
  text-align: center;
  background: rgba(247, 115, 27, 0.658);
  color:#243755;

}

/* MODIFICACIONES ESTILOS BOOTSTRAP */

.col-5 {
  /* width: 100%; */
  max-width: 100%;
  height: 380px;
  text-align: justify;
  /* display: block; */
  /* flex: 1; */
  /* box-sizing: content-box; */
  margin-bottom: 15px;
  border-radius: 0.7cm;
  background: #213755;
  margin: 5px;
}

.fila {
  width: 100%;
  margin-right: 0px;
  margin-left: 0px;
  display: block;
}

.titulos {
  /* margin-left: 20px; */
  text-align: center;
  color: aliceblue;
}

.parrafo {
  text-align: center;
  color: #eb5a47;
  font-size: 25px;
}
/* FIN MODIFICACIONES ESSTILOS BOOTSTRAP */


.tituloGrande{
  text-align: center;
}

img {
  border-style: groove;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.team-imagenPerfil{
  height: 150px;
  width: 150px;
  border-radius: 2cm;
}


.descripcion {
  color: beige;
}


@media (min-width: 576px) {
  
  .fila {
    width: 44%;
    display: inline-block;
    margin-right: 23px;
    vertical-align: middle;
  }

  .col-5 {
    max-width: 100%;
    height: 525px;
    /* vertical-align: middle; */
    float: none;
  }

}

@media (min-width: 768px) {

  .fila {
    width: 44%;
    display: inline-block;
    margin-right: 28px;
    vertical-align: middle;
  }

  .col-5 {
    max-width: 96%;
    height: 420px;
    float: none;
  }

}
  
@media (min-width: 800px) {

  .fila {
    width: 30%;
    display: inline-block;
    margin-right: 23px;
    vertical-align: middle;
  }

  .col-5 {
    max-width: 96%;
    height: 550px;
    /* vertical-align: middle; */
    float: none;
  }

  .titulos {
    height: 99px;
  }
}
  
@media (min-width: 1000px) {

  .fila {
    width: 20%;
    display: inline-block;
    margin-right: 32px;
    vertical-align: middle;
  }

  .col-5 {
    max-width: 100%;
    height: 580px;
    /* vertical-align: middle; */
    float: none;
  }

    .titulos {
    height: 105px;
    font-size: 25px;
    vertical-align: middle;
    margin-top: 20px;
  }

    .parrafo{
    margin-top: 10px;
    font-size: 22px;
  }

}

@media (min-width: 1200px) {

  .fila {
    width: 17%;
    display: inline-block;
    margin-right: 32px;
    vertical-align: middle;
  }

  .col-5 {
    max-width: 100%;
    height: 620px;
    /* vertical-align: middle; */
    float: none;
    margin-left: 12px;
  }

  .descripcion {
    vertical-align: sub;
  }

  .titulos {
    height: 105px;
    font-size: 25px;
    vertical-align: middle;
    margin-top: 20px;
  }

  .parrafo{
    margin-top: 10px;
    font-size: 22px;
  }
}





/* FINALIZA CODIGO ESTILO TEAMCARD */




</style>
