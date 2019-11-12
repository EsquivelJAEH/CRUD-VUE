<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de Prueba</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="actualizarNombre()">Actualizar</button>
        <button @click="redirigirBlog()">Redirigir</button>
        <h4>{{nombre}}</h4>
      </section>
      <sidebar></sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "pagina",
  components: {
    Sidebar
  },
  created() {
    console.log("Componente creado");
  },
  /**
   * Recoger parametros por url
   */
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  destroyed() {
    console.log("componente eliminado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Armando"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Esquivel";
      console.log(this.nombre);
    },

    redirigirBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>