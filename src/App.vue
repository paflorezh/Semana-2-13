<template>
  <div id="app">
    <!-- <h1>{{ titulo }}</h1> -->
    <!-- <img src="./assets/logo.png" alt="Vue Logo"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="txt_c"> {{ titulo }} </p>
    <div class="row" v-for='(item, index) of team' :key='index'>
      <div class="col-5">
        <TeamCard v-bind:member="item"></TeamCard>
      </div>    
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeamCard from './components/TeamCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TeamCard
  },
  data(){
    return{
        titulo: 'EQUIPO DE TRABAJO',
        team: [{
          codigo:1,
          nombre: 'Richar Espinosa',
          Descripcion: 'Edad 23 años, Ingeniero Mecatrónico egresado de la Universiad Tecnológica de Pereira, oriundo de la Ciudad de Ipiales, Nariño. Tengo 23 años, entre mis pasatiempos es pasear a mi perro y mirar videos en youtube.',
          rol: 'Ingeniero Mecatrónico',
          imagen: "https://placeimg.com/192/192/people",
        },{
          codigo:2,
          nombre: 'Alexander Florez',
          Descripcion: 'Edad 38 años, estudió en el Servicio Nacional de Aprendizaje SENA en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Videojuegos, ver series y películas en familia',
          rol: 'Arquitecto de Software',
          imagen: "https://placeimg.com/192/192/people",
        },{
          codigo:3,
          nombre: 'Wilton Romero',
          Descripcion: 'Edad 30 años, estudia en la Universidad Nacional de Colombia UNAL en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Peliculas y Videojuegos',
          rol: 'Tester',
          imagen: "https://placeimg.com/192/192/people",
        },{
          codigo:4,
          nombre: 'Nayibe Casas',
          Descripcion: '20 años, estudiante de ingenieria de sistema de cuarto semestre, universidad de cundinamarca seccional ubaté, me gusta mucho estar en constante aprendizaje, una de mis pasiones es el dibujo  y el diseño',
          rol: 'Analista de Software',
          imagen: "https://placeimg.com/192/192/people",
        },{
          codigo:5,
          nombre: 'Luis Rivera',
          Descripcion: 'Edad 45 años. Licenciado en matemáticas de la Universidad Pedagógica Nacional. Docente de matemáticas Institución Educativa Julio César Turbay Ayala en Soacha Cundinamarca',
          rol: 'Analista de Software',
          imagen: "https://placeimg.com/192/192/people",
        },
        ],

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
  height: 350px;
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
