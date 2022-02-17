<template>
  <div>
    <Toast />
    <div id="app" class="app">
      
      <Hero />

      <Navbar />
      <About />
      <div class="checker">
        <div id="top" class="top">TOP</div>
        <div class="spacer">Spacer</div>
        <div id="bottom" class="bottom">BOTTOM</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";

export default {
  components: {
    Hero,
    Navbar,
    About
},
  methods: {
    greet() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
        life: 3000,
      });
    },
  },
};
</script>