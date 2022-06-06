<template>
    <a href="#about" class="home__btn">Sobre mí</a>
</template>

<style scoped>
.home__btn {
    background: var(--gradient-main);
    background-size: 800% 400%;
    padding: .8rem 1.8rem;
    border: none;
    border-radius: .8rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-color-title);
    transition: all .5s ease-in-out;
    animation: gradient 5s infinite cubic-bezier(.62, .28, .23, .99) both;
    text-decoration: none;
}
.home__btn:hover {
   animation: gradient 3s infinite;
   transform: scale(1.05);
}
.home__btn:active {
   animation: gradient 3s infinite;
   transform: scale(0.8);
}
  
@keyframes gradient {
   0% {
    background-position: 0% 50%;
   }
  
   50% {
    background-position: 100% 50%;
   }
  
   100% {
    background-position: 0% 50%;
   }
}
@media (min-width: 768px) {
    .home__btn {
      padding: 1.2rem 2rem;
      font-size: 1.8rem;
    }
}

  
@media (min-width: 1440px) {
    .home__btn {
      padding: 1.2rem 2rem;
      font-size: 2rem;
    }
}
</style>