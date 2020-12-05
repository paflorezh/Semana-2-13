<template>
  <div id="app">

    <menu-banner></menu-banner>

    <noticias-estaticas></noticias-estaticas>

    <api-peliculas></api-peliculas>

    <div>
    <p class="txt_c"> {{ titulo }} </p>
    <div class="fila" v-for='(item, index) of team' :key='index'>
      <div class="col-5">
        <TeamCard v-bind:member="item"></TeamCard>
      </div>    
    </div>
    </div>
    
    <Footer></Footer>

  </div>
</template>

<script>

import MenuBanner from './components/MenuBanner.vue';
import NoticiasEstaticas from './components/NoticiasEstaticas.vue';
import TeamCard from './components/TeamCard.vue';
import ApiPeliculas from './components/ApiPeliculas';
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    MenuBanner,
    NoticiasEstaticas,
    TeamCard,
    ApiPeliculas,
    Footer
    
  },

  data(){
    return{
        titulo: 'EQUIPO DE TRABAJO',
        team: [{
          codigo:1,
          nombre: 'Richar Espinosa',
          descripcion: 'Edad 23 años, Ingeniero Mecatrónico egresado de la Universiad Tecnológica de Pereira, oriundo de la Ciudad de Ipiales, Nariño. Tengo 23 años, entre mis pasatiempos es pasear a mi perro y mirar videos en youtube.',
          rol: 'Ingeniero Mecatrónico',
          image: "img/Richard.jpg",
        },{
          codigo:2,
          nombre: 'Alexander Florez',
          descripcion: 'Edad 38 años, estudió en el Servicio Nacional de Aprendizaje SENA en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Videojuegos, ver series y películas en familia',
          rol: 'Arquitecto de Software',
          image: "img/Pedro.jpeg",
        },{
          codigo:3,
          nombre: 'Wilton Romero',
          descripcion: 'Edad 30 años, estudia en la Universidad Nacional de Colombia UNAL en el programa de Tecnología en Análisis y desarrollo de sistemas de información Pasatiempos: Peliculas y Videojuegos',
          rol: 'Tester',
          image: "img/Will.png",
        },{
          codigo:4,
          nombre: 'Nayibe Casas',
          descripcion: '20 años, estudiante de ingenieria de sistema de cuarto semestre, universidad de cundinamarca seccional ubaté, me gusta mucho estar en constante aprendizaje, una de mis pasiones es el dibujo  y el diseño',
          rol: 'Analista de Software',
          image: "img/Nayibe.jpeg",
        },{
          codigo:5,
          nombre: 'Luis Rivera',
          descripcion: 'Edad 45 años. Licenciado en matemáticas de la Universidad Pedagógica Nacional. Docente de matemáticas Institución Educativa Julio César Turbay Ayala en Soacha Cundinamarca',
          rol: 'Analista de Software',
          image: "img/Luis.jpeg",
        },
        ],

    }
  }
}
</script>

<style>
#app {
  
  text-align: center;
  
}



</style>

