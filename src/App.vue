<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    
      <!--Forma estatica de cargar el componente-->
      <!--<LastArticles></LastArticles>-->

      <!--Utilizar la directiva para cargar los componentes dinamicamente-->
      <router-view></router-view>

      
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

/**
 * importar MiComponente creado
 */
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
@import './assets/css/styles.css';
</style>
