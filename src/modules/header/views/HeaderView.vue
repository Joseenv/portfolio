<script setup>
import { defineAsyncComponent} from 'vue';

const NavbarButton = defineAsyncComponent( () => import('../components/NavbarButton.vue'))
const NavbarMenu = defineAsyncComponent( () => import('../components/NavbarMenu.vue'))
const NavbarProgressBar = defineAsyncComponent( () => import('../components/NavbarProgressBar.vue'))


</script>

<template>
<header class="header">
    <nav class="navbar">
        <div class="navbar__logo">
            <span class="logo__title">
                Jose NV.
            </span>
        </div>
        <NavbarButton/>
        <NavbarMenu/>
    </nav>
    <NavbarProgressBar/>
</header>
</template>

<style scoped>
.header {
    width: 100%;
    height: 6rem;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    background-color: var(--background-color-main);
    box-shadow: var(--shadow-main);
    flex-direction: column;
    z-index: 2;
}

.navbar{
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    padding: 0 2.4rem;
    margin: 0 auto;
}

.navbar__logo {
    color: var(--text-color-title);
    font-size: 1.6rem;
    font-weight: 700;
}

@media (min-width: 768px) {
    .navbar__logo {
        font-size: 1.8rem;
    }
}

</style>