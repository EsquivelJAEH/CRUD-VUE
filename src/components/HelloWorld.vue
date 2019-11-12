<template>
  <section id="content">
    <h2 class="subheader">HelloWorld</h2>
    <h1>{{ msg }}</h1>
    <h2>{{texto}}</h2>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      texto: "Hola Mundo desde componente!!"
    };
  }
};
</script>