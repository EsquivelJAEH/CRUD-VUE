<template>
    <article class="article-item" >
        <div class="image-wrap">
          <img
            :src="pelicula.image"
          />
        </div>

        <h2>{{pelicula.title}}</h2>
        <span class="date" v-bind:class="{
            yeargreen: pelicula.year >= 2015,
            yearred: pelicula.year < 2015,
        }">
        {{pelicula.year}}</span>
        <a href="#">Leer más</a>
        <input type="button" value="Favorita" @click="pasarFavoritaAlPadre(pelicula)">

        <div class="clearfix"></div>
      </article>
</template>

<script>

export default {
    name: 'Pelicula',
    props: ['pelicula'],
    methods: {
      pasarFavoritaAlPadre(pelicula)
      {
        console.log(pelicula);
        this.$emit('favorita', pelicula);
      }
    }
}
</script>