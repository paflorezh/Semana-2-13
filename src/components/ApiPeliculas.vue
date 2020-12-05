<template>
  <div id="ApiPeliculas">
        <div class="container-fluid">
            <h1 class="text-center mt-3" >Entretenimiento</h1>
            <div class="row mt-md-5 mt-sm-5 mt-xs-5">
                <div class="col-lg-6 col-xs-12"  v-for="(movies,index) of Peliculas" :key="index">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="p-3 mb-2 bg-secondary text-white">
                            <img style="float:left; margin:10px;" :src="movies.Poster">
                        </div>
                        <div>
                            
                        </div>
                        <div class="p-2 ml-2">
                            <hr>
                            <hr>
                            <h2 class="text-center">{{movies.Title}}</h2>
                            <hr>
                            <hr>
                            <p>
                                Pelicula protagonizada por Sylvester Stallone del año {{movies.Year}} lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, dolorem ab ipsum sint facilis molestias esse saepe exercitationem repellat ex quam debitis corrupti? Sunt pariatur mollitia reiciendis veritatis rerum.
                            </p>
                        </div>
                        <div class="d-flex container-fluid justify-content pb-2 mt-n2"> <button type="button"
                                class="btn btn-outline-info"><a :href="'https://www.imdb.com/title/' + movies.imdbID" class="new-noticias-textos-enlace">Leer
                                más...</a></button> </div>
                    </div>
                    
                </div>

            </div>
        </div>          
  </div>
</template>

<script>

import axios from 'axios';


export default {
    name : 'ApiPeliculas',
    data(){
        return{
            Peliculas : null,
            prueba : null
        }
    },
    mounted(){
        axios
        .get(`http://www.omdbapi.com/?apikey=1ca45621&s=rocky&type=movie`)
        .then(Response => (this.Peliculas = Response.data.Search.slice(0,4)))
        
    }
}
</script>