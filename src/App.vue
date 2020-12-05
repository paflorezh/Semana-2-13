<template>
  <div id="app">
    <!-- <h1>{{ titulo }}</h1> -->
    <!-- <img src="./assets/Pedro.jpeg" alt="Vue Logo"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="txt_c"> {{ titulo }} </p>
    <div class="row" v-for='(item, index) of team' :key='index'>
      <div class="col-5">
        <TeamCard v-bind:member="item"></TeamCard>
      </div>    
    </div>

    <!-- FOOTER -->
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeamCard from './components/TeamCard.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TeamCard,
    Footer
  },
  data(){
    return{
        titulo: 'EQUIPO DE TRABAJO',
        team: [{
          codigo:1,
          nombre: 'Richar Espinosa',
          Descripcion: 'Edad 23 años, Ingeniero Mecatrónico egresado de la Universiad Tecnológica de Pereira, oriundo de la Ciudad de Ipiales, Nariño. Tengo 23 años, entre mis pasatiempos es pasear a mi perro y mirar videos en youtube.',
          rol: 'Ingeniero Mecatrónico',
          imagen: "img/Richard.jpg",
        },{
          codigo:2,
          nombre: 'Alexander Florez',
          Descripcion: 'Edad 38 años, estudió en el Servicio Nacional de Aprendizaje SENA en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Videojuegos, ver series y películas en familia',
          rol: 'Arquitecto de Software',
          imagen: "img/Pedro.jpeg",
        },{
          codigo:3,
          nombre: 'Wilton Romero',
          Descripcion: 'Edad 30 años, estudia en la Universidad Nacional de Colombia UNAL en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Peliculas y Videojuegos',
          rol: 'Tester',
          imagen: "img/Will.png",
        },{
          codigo:4,
          nombre: 'Nayibe Casas',
          Descripcion: '20 años, estudiante de ingenieria de sistema de cuarto semestre, universidad de cundinamarca seccional ubaté, me gusta mucho estar en constante aprendizaje, una de mis pasiones es el dibujo  y el diseño',
          rol: 'Analista de Software',
          imagen: "img/Nayibe.jpeg",
        },{
          codigo:5,
          nombre: 'Luis Rivera',
          Descripcion: 'Edad 45 años. Licenciado en matemáticas de la Universidad Pedagógica Nacional. Docente de matemáticas Institución Educativa Julio César Turbay Ayala en Soacha Cundinamarca',
          rol: 'Analista de Software',
          imagen: "img/Luis.jpeg",
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
  color: #388ce0;
  margin-top: 60px;
}



</style>
