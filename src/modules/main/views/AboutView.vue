<template>
    <section id="about" class="section">
      <div class="wave__about">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="about">
        <div class="about__hero">
          <img src="../assets/hero-about.png" alt="About Hero Imagen" class="hero__img" loading="lazy">
          <div class="hero__content">
            <h2 class="content__title">Sobre mí</h2>
            <p class="content__paragraph">
              ¡Mucho gusto! Soy Jose Navarro y me especializo en el Desarrollo Frontend usando Vue.js como framework, pero también soy un apasionado de lo creativo, por lo que me encanta realizar interfaces UX/UI en todos mis proyectos, con la ayuda de Figma.
            </p>
          </div>
        </div>

      </div>    
    </section>
</template>


<style scoped>
.section {
  width: 100%;
  background-color: var(--background-color-soft);
  position: relative;
  scroll-margin-top: 6.4rem;
}
.wave__about {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
}
.wave__about svg {
    width: calc(100% + 1.3px);
    height: 81px;
    transform: rotateY(180deg);
}
.wave__about .shape-fill {
    fill: #2D333E;
}
.about {
  padding: 8.8rem 2.4rem 8.8rem 2.4rem;
}
.about__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
}
.hero__img {
  height: 32rem;
  width: 25.5rem;
  object-fit: cover;
}
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
}
.content__title {
  color: var(--text-color-title);
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1.6px;
}
.content__paragraph {
  color: var(--text-color-paragraph);
  font-size: 1.4rem;
  text-align: justify;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: .4px;
}



@media (min-width: 767px) {
    .wave__about svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 120px;
    }
}
</style>