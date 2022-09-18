/* eslint-disable vue/multi-word-component-names */

<template>
  <div id="app">
    <router-view />
    <div id="modal" />
  </div>
</template>

<script setup>
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<style lang="scss">
@import "./styles/reset";
@import "./styles/base";
</style>
