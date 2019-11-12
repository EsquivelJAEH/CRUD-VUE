<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
      </section>
      <sidebar></sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "formulario",
  components: {
    Sidebar
  }
};
</script>