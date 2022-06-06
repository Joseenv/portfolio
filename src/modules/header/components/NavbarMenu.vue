<script setup>
    import { defineAsyncComponent, onMounted } from 'vue';
    import { useNavbarStore } from '../store/navbarStore'

    const SocialMediaIcons = defineAsyncComponent( () => import('../../shared/components/SocialMediaIcons.vue'))
    const navbarStore = useNavbarStore()
    
    onMounted(() => {
        navbarStore.addActiveStatus()
    });

</script>

<template>
    <div :class="navbarStore.classListMenu">    
        <ul class="menu__pages">
            <li class="pages__item" v-for="( { href, name } , index ) in navbarStore.linksMenu" :key="index">
                <a :href="href" class="pages__link" @click="navbarStore.openMenu()"> {{name}} </a>
            </li>
        </ul>
        <SocialMediaIcons/>
    </div>
</template>

<style scoped>
.navbar__menu {
    position: fixed;
    width: 100%;
    top: 6rem;
    background-color: var(--background-color-main);
    height: 100%;
    left: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5.6rem;
    transition: left 0.4s;
}
.active {
    left: 0%;
}
.menu__pages {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    align-items: center;
}
.pages__link {
    color: var(--text-color-links);
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
}
.link__active {
    color: var(--color-main);
}

@media (min-width: 768px) {
    .navbar__menu {
        position: initial;
        width: initial;
        top: initial;
        background-color: initial;
        height: initial;
        left: initial;
        flex-direction: row;
        transition: none;
    }
    .menu__pages {
        flex-direction: row;
    }
    .pages__link {
        font-size: 1.4rem;
    }
}
  
@media (min-width: 1024px) {
    .pages__link:hover {
        color: var(--color-main);
        transition: color 0.3s;
    }
}
</style>