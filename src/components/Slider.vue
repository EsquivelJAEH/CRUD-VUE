<template>
  <div id="slider" class="slider-big">
    <h1>{{texto}}</h1>
    <router-link to="/blog" class="btn-white" v-if="showbtn">Ir al Blog</router-link>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ['texto', 'showbtn']
};
</script>