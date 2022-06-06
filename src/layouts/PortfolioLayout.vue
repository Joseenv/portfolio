<script setup>
import { defineAsyncComponent, onMounted } from 'vue';

const HeaderView = defineAsyncComponent( () => import('../modules/header/views/HeaderView.vue'))
const MainLayout = defineAsyncComponent( () => import('../modules/main/layouts/MainLayout.vue'))
const FooterView = defineAsyncComponent( () => import('../modules/footer/views/FooterView.vue'))

</script>

<template>
<HeaderView/>
<MainLayout/>
<FooterView/>
</template>
