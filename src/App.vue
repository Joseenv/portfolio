<script setup>
import { defineAsyncComponent } from "vue";

const PortfolioLayout = defineAsyncComponent( () => import('./layouts/PortfolioLayout.vue') )
</script>

<template>
  <PortfolioLayout/>
</template>

<style>
#app {
  width: 100%;
}
</style>
