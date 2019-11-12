import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import blog from './components/blog.vue'
import formulario from './components/formulario.vue'
import pagina from './components/pagina.vue'
import Peliculas from './components/peliculas.vue'
import ErrorComponent from './components/ErrorComponent.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);

/**
 * Definicion de las rutas
 */
const routes = [
  {path: '/home', component: LastArticles},
  {path: '/ultimos_articulos', component: LastArticles},
  {path: '/mi_componente', component: MiComponente},
  {path: '/hola_mundo', component: HelloWorld},
  {path: '/blog', component: blog},
  {path: '/formulario', component: formulario},
  {path: '/pagina/:id?', name: 'pagina', component: pagina},
  {path: '/', component: LastArticles},
  {path: '/peliculas', name: 'peliculas', component: Peliculas},
  {path: '*', component: ErrorComponent},
];

/**
 * Objeto de Route
 */
const router = new VueRouter({
  routes,
  mode: 'history'
});


/**
 * Dar de alta dentro de la instancia
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
