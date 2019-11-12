<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div class="favorita" v-if="favorita">
         <h3>{{favorita.title}}</h3> 
        </div>
        <!--Listado articulos-->
        <div id="articles">
          <!--  -->
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
            <!-- pasandole el objeto pelicula  -->
            <Pelicula :pelicula="pelicula" @favorita="peliculaFavorita"></Pelicula>
          </div>
        </div>
      </section>
      <sidebar></sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Pelicula from "./pelicula.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods:{
    peliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "Batman",
          year: 2017,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Batman_%28black_background%29.jpg/220px-Batman_%28black_background%29.jpg"
        },
        {
          title: "Dragon",
          year: 2005,
          image:
            "http://mouse.latercera.com/wp-content/uploads/2019/05/Dragon-Ball.jpg"
        }
      ]
    };
  }
};
</script>