<template>
  <div>
    <slider texto="Blog"></slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
      </section>
      <sidebar></sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";

export default {
  name: "blog",
  components: {
    Slider,
    Sidebar
  }
};
</script>