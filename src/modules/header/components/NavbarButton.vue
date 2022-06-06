<script setup>
import { useNavbarStore } from '../store/navbarStore'

const navbarStore = useNavbarStore()
</script>

<template>
    <button class="navbar__button" :aria-label="navbarStore.ariaLabel" @click="navbarStore.openMenu()">
        <div :class="navbarStore.classListToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<style scoped>
.navbar__button {
    border: none;
    background: none;
    cursor: pointer;
}
.toggle{
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
}
.toggle span {
    position: absolute;
    width: 1.8rem;
    height: .3rem;
    background-color: var(--color-main);
    border-radius: .2rem;
    transition: 0.5s;
}
.toggle span:nth-child(1) {
    transform: translateY(-7px);
    width: 1.25rem;
    right: .34rem;
} 
.toggle.active span:nth-child(1) {
    transform: translateY(0px) rotate(-45deg);
    width: 1.8rem;
    transition-delay: 0.125s;
}
.toggle span:nth-child(2) {
    transform: translateY(7px);
    width: .9rem;
    right: .34rem;
}
.toggle.active span:nth-child(2) {
    transform: translateY(0px) rotate(-315deg);
    width: 1.8rem;
    transition-delay: 0.125s;

}
.toggle.active span:nth-child(3) {
    transform:  translateX(-40px);
}

@media (min-width: 768px) {
    .navbar__button {
        display:none;
    }
}
</style>