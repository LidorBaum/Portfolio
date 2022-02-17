<template>
  <div>
    <Toast />
    <div id="app" class="app">
      
      <Hero />

      <Navbar />
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

export default {
  components: {
    Hero,
    Navbar
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