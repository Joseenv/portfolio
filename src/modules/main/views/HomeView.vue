<script setup>
import { defineAsyncComponent, ref} from 'vue'
import VueWriter from 'vue-writer'
const HomeButton = defineAsyncComponent( () => import ('../components/HomeButton.vue')  )  

</script>

<template>
    <section id="home" class="section home" ref="home">
        <div class="home__container">
          <img src="../assets/home-cover.jpeg" alt="Jose Navarro Vicente" class="home__img">
          <div class="home__content">
            <h1 class="home__title">¡Hola mundo!<br>Mi nombre es Jose</h1>
            <div class="home__paragraph">
                <span>Y soy</span>
                <p class="paragraph__typing"><VueWriter :array="['Desarrollador Frontend', 'Diseñador UX/UI']" :typeSpeed="100" :eraseSpeed="100" :delay="1000"/></p>
            </div>
            <HomeButton/>
          </div>
        </div>
      </section>
</template>

<style scoped>
.home{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-evenly;
}
.home__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
}
.home__img {
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
}
.home__content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home__title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: .8rem;
}
.home__paragraph {
  display: flex;
  gap: .5rem;
  color: var(--text-color-links);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 2rem;
}
@media (min-width: 768px) {
  .home__container{
    gap: 2.4rem;
  }
  .home__img {
    width: 32rem;
    height: 32rem;
  }
  .home__title {
    font-size: 4rem;
    margin-bottom: 1.2rem;
  }
  .home__paragraph {
    font-size: 2rem;
    margin-bottom: 2.8rem;
    gap: .6rem;
  }

@media (min-width: 1024px) {
  .home__container{
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
  .home__img {
    width: 38rem;
    height: 38rem;
  }
  .home__title {
    font-size: 4.8rem;
  }
}

@media (min-width: 1440px) {
  .home__container{
    gap: 4.8rem;
  }
  .home__img {
    width: 54rem;
    height: 54rem;
  }
  .home__title {
    font-size: 6rem;
  }
  .home__paragraph {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
    gap: .7rem;
  }
}
}
</style>