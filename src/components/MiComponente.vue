<template>
  <div>
    <div class="center">
      <section id="content">
        <h3 class="subheader">{{subtitulo}}</h3>
        <h1>Este es mi componente</h1>
        <h2>{{ subtitulo }}</h2>

        <h2>Reactividad</h2>
        <!-- Vincular input con modelo -->
        <input type="text" v-model="nombre" />
        Mi nombre es:
        <strong>{{nombre}}</strong>

        <h2>Directivas Condicionales</h2>
        <input type="number" v-model="edad" />
        Mi edad es:
        <strong>{{edad}}</strong>
        <p v-if="edad && edad >= 18">Eres Mayor de Edad</p>
        <p v-else>Eres Menor de Edad</p>

        <h2>Directiva Iterativa</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
      </section>
      <sidebar></sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "MiComponente",
  components: {
    Sidebar
  },
  // Modelo de datos del componente
  data() {
    return {
      subtitulo: "Subtitulo de componente",
      nombre: " ",
      edad: 18,
      peliculas: ["spiderman", "karate kid", "13 fantasmas", "dumbo"]
    };
  }
};
</script>