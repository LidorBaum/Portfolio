<template>
      <div class="skill-card">
          <p>{{skill.name}}</p>
          <img :src="skill.image"/>
      </div>
</template>

<script>
export default {
    props: ['skill'],
};
</script>
