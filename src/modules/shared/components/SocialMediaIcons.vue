<template>
    <div class="menu__social">
        <a href="https://www.linkedin.com/in/josee-nv/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" /></a>
        <a href="https://github.com/Joseenv" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="social-icon" /></a>
        <a href="https://twitter.com/Joseenv_" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" /></a>
        
    </div>
</template>

<style scoped>
.menu__social {
    display: flex;
    gap: 2.4rem;
}
.social-icon {
    color: var(--icons-color);
    font-size: 2rem;
}
@media (min-width: 1024px) {
    .social-icon:hover {
        color: var(--color-main);
        transition: color 0.3s;
    }
}
</style>