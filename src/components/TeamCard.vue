<template>
    <div>
        <!-- <h2 class="tituloGrande"> {{ titulo }} </h2> -->
        <!-- <img src="./richard.jpg" alt=""> -->
        <!-- <p class="txt_c"> {{ titulo }} </p> -->
        <!-- <div class="row"> -->
            <!-- <div class="col-5"> -->
                <img v-bind:src= "member.imagen" alt="Images Equipo" class="team-imagenPerfil " >
                    <h3 class="">Team member: {{member.codigo}} {{member.rol}} </h3>
                    <p class=""> {{ member.nombre }} </p>
                    <span class=""> {{ member.Descripcion }}
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
<style >

/* INICIA CODIGO ESTILO TEAMCARD */
body{
  font-family: 'Merriweather', serif;
  background: #c8c7c7;
  text-align: center;
}


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

.row {
  width: 100%;
  margin-right: 0px;
  margin-left: 0px;
  display: block;
}

h3 {
  /* margin-left: 20px; */
  text-align: center;
  color: aliceblue;
}

p {
  text-align: center;
  color: #eb5a47;
  font-size: 25px;
}
/* FIN MODIFICACIONES ESSTILOS BOOTSTRAP */
.container{
  display: contents;
  width: 100%;
  background-color: #e9da0f;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  position: static;
  padding: 10px 20px;
}

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


span {
  color: beige;
}


@media (min-width: 576px) {
  
  .row {
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

  .row {
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

  .row {
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

  h3 {
    height: 99px;
  }
}
  
@media (min-width: 1000px) {

  .row {
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

    h3 {
    height: 105px;
    font-size: 25px;
    vertical-align: middle;
    margin-top: 20px;
  }

    p{
    margin-top: 10px;
    font-size: 22px;
  }

}

@media (min-width: 1200px) {

  .row {
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

  span {
    vertical-align: sub;
  }

  h3 {
    height: 105px;
    font-size: 25px;
    vertical-align: middle;
    margin-top: 20px;
  }

  p{
    margin-top: 10px;
    font-size: 22px;
  }
}





/* FINALIZA CODIGO ESTILO TEAMCARD */




</style>