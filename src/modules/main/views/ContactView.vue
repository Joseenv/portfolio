<template>
    <section id="contact" class="section contact">
        <div class="contact__paragraphs">
            <p class="paragraph__first">
                ¡Cuéntame más de esa idea que tienes en mente y hagámosla realidad!
            </p >
                
            <p class="paragraph__second">
                Para esto, te invito a dejarme un mensaje en cualquiera de mis redes sociales, te responderé lo más pronto posible.
            </p>
        </div>
        <div class="contact__hero">
            <img class="hero__img" src="../assets/contact-cover.png" alt="Contact Img" loading="lazy">
            <div class="hero__socialmedia">
                <a class="socialmedia__item" href="https://twitter.com/Joseenv_" target="_blank">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
                    <span>Twitter</span>
                </a>
                <a class="socialmedia__item" href="https://www.linkedin.com/in/josee-nv/" target="_blank">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
                    <span>Linkedin</span>
                </a>
                <a class="socialmedia__item" href="https://github.com/Joseenv" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
                    <span>Github</span>
                </a>
                <a class="socialmedia__item" href="mailto:jose229901@gmail.com?Subject=Quiero%20trabajar%20contigo!">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="social-icon" />
                    <span>Email</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .contact {
        width: 100%;
        margin-bottom: 8rem;
        max-width: 1440px;
    }
    .contact__paragraphs {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4.8rem;
        margin-bottom: 8rem;
    }
    .paragraph__first {
        color: var(--color-main);
        text-align: left;
        font-size: 2.4rem;
        font-weight: 700;
    }
    .paragraph__second {
        color: var(--text-color-links);
        text-align: right;
        font-size: 1.4rem;
    }
    .contact__hero {
        position: relative;
        width: 100%;
    }
    .hero__img {
        height: 30rem;
        width: 32.8rem;
        object-fit: cover;
    }
    .hero__socialmedia {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        align-items: center;
        right: 0;
        bottom: -4rem;
    }
    .socialmedia__item {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        text-decoration: none;
        color: var(--text-color-description);
        font-size: 1rem;
    }
    .social-icon {
        color: var(--text-color-title);
        font-size: 2rem;
    }

    @media ( min-width : 768px ) {
        .contact {
            margin-bottom: 1.6rem;
        }
        .contact__paragraphs {
            margin-bottom: 9.6rem;
        }
        .paragraph__first {
            font-size: 2.4rem;
            width: 40rem;

        }
        .paragraph__second {
            font-size: 1.6rem;
            width: 40rem;
            margin-left: calc(100% - 40rem);       
        }
        .contact__hero {
            position: initial;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.4rem;
        }
        .hero__img {
            height: 48rem;
            width: 52.4rem;
        }
        .hero__socialmedia {
            position: initial;
            gap: 3.2rem;
        }
        .socialmedia__item {
            font-size: 1.2rem;
        }
        .social-icon {
            font-size: 2.8rem;
        }
    }

    @media ( min-width : 1024px ) {
        .contact {
            margin-bottom: 5.6rem;
            display: flex;
            align-items: center;
            gap: 4.8rem;
            justify-content: center;
            
        }
        .contact__paragraphs {
            margin-bottom: 0;
            gap: 6.4rem;
            width: auto;
        }
        .paragraph__first {
            width: 44rem;
        }
        .paragraph__second {
            width: 44rem;
            margin-left: calc(100% - 44rem);       
        }
        .contact__hero {
            gap: 2.4rem;
            width: auto
        }
        .hero__img {
            height: 32rem;
            width: 35rem;
        }
        .hero__socialmedia {
            gap: 2.8rem;
        }
        .social-icon {
            font-size: 2.4rem;
        }
        .social-icon:hover {
            color: var(--text-color-description);
            transition: color .3s ease;
        }
    }
    @media ( min-width : 1440px ) {
        .contact {
            margin-bottom: 7.2rem;
            gap: 8.8rem;
        }
        .contact__paragraphs {
            margin-bottom: 0;
            gap: 7.2rem;
            width: auto;
        }
        .paragraph__first {
            width: 48rem;
            font-size: 3.2rem;
        }
        .paragraph__second {
            width: 48rem;
            font-size: 2rem;
            margin-left: calc(100% - 48rem);       
        }
        .hero__img {
            height: 40rem;
            width: 44rem;
        }
        .hero__socialmedia {
            gap: 3.2rem;
        }
        .social-icon {
            font-size: 2.4rem;
        }
    }

</style>