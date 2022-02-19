<template>
  <div class="skills-container">
    <div class="skills">
      <h1>My Skills</h1>
      <div class="skills-set">
        <skill-card v-for="skill in skills" :key="skill.name" :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";
export default {
  components: {
      SkillCard
  },
  data() {
    return {
      skills: [{ name: "ReactJS", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645193085/portfolio/physics_g5nsrz.png'},
       { name: "VueJS", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645195545/portfolio/icons8-vue-js-480_mznxvd.png' },
       { name: "CSS 3", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645195985/portfolio/317756_badge_css_css3_achievement_award_icon_fdxuyz.png' },
       {name: "HTML 5", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645195789/portfolio/65687_html_logo_html5_5_five_icon_kuvv3x.png'},
       {name: "Javascript", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645197343/portfolio/Javascript-shield_tdhqpv.svg'},
       { name: "NodeJS", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645196950/portfolio/1200px-Node.js_logo.svg_zp7v3x.png' },
       { name: "MongoDB", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645197005/portfolio/mongodb_ffw3tx.png' },
       { name: "Github", image: 'https://res.cloudinary.com/echoshare/image/upload/v1645197450/portfolio/github_1_o1esto.svg' },
    ]};
  },
};
</script>
