<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';


const HomeView = defineAsyncComponent( () => import('../views/HomeView.vue'))
const AboutView = defineAsyncComponent( () => import('../views/AboutView.vue'))
const ProjectsView = defineAsyncComponent( () => import('../views/ProjectsView.vue'))
const ContactView = defineAsyncComponent( () => import('../views/ContactView.vue'))

</script>

<template>
    <HomeView/>
    <AboutView/>
    <ProjectsView/>
    <ContactView/>    
</template>
