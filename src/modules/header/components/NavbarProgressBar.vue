<script setup>
import { onMounted, ref} from 'vue'

const progress_bar = ref(null)

onMounted(() => {

    requestAnimationFrame(updateProgress)
    
    function updateProgress () {
        progress_bar.value.style.width = `${( (window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100 )}%`
        requestAnimationFrame(updateProgress)
    };
    
})
</script>

<template>
    <div class="progress__bar" ref="progress_bar"></div>
</template>

<style scoped>
.progress__bar {
    background: var(--color-main);
    height: 2px;
    width: 0%;
}
</style>