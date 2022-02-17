<template>
   <div id="app">
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
        />
    </div>
</template>

<script>



export default {
  components: {
  },
}
</script>
