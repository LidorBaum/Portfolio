<template>
  <Dialog
    :header="projName"
    :visible.sync="display"
    :containerStyle="styleObj"
    :modal="true"
    :dismissableMask="true"
    @hide="onClose"
  >
    <img class="dialog-img" v-if="imageURL" :src="imageURL" />
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
  name: "DisplayImageDialog",
  components: {
    Dialog,
  },
  mounted() {
    console.log(1);
  },
  methods: {
    onClose() {
      this.$emit("hide");
    },
  },
  props: ["imageURL", "projName"],
  data() {
    return {
      display: true,
      styleObj: {
          width: "1000px",
        //   height: "700px"
      }
    };
  },
};
</script>
