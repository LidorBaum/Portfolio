<template>
      <div class="project-card">
          <p class="project-name">{{project.name}}</p>
          <p class="project-desc" v-if="project.desc">{{project.desc}}</p>
          <div class="project-links">
              <a  target="_blank" :href="project.github"><Button class="p-button-sm p-button-raised">Repo <span> </span></Button></a>
              <a  target="_blank" :href="project.liveDemo"><Button class=" p-button-sm p-button-help p-button-raised">Live Demo <span><i class="pi pi-desktop"></i> </span></Button></a>
          </div>
          <img :src="project.image"/>
      </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    components:{
        Button
    },
    props: ['project'],
};
</script>
