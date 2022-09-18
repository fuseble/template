<template>
  <button class="button">{{ text }} | {{ counter }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "button-default",
  props: {
    text: String,
    counter: [String, Number],
  },
  setup(props) {
    console.log(props);
  },
  methods: {
    onClick() {
      this.$emit("test");
    },
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
