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
  <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Parti from "./components/Parti.vue";

export default {
  components: {
    Hero,
    Navbar,
    About,
    Parti
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