<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>Curso</strong>Vue
        </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <!--Mandar parametros por url por json-->
            <router-link :to="{name: 'pagina', params: {id: 'valor del parametro'}}" active-class="active">Pagina</router-link>
          </li>
          <li>
            <router-link to="/mi_componente" active-class="active">Mi Componente</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="active">Peliculas</router-link>
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>