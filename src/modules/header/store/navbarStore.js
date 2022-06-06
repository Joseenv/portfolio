import { defineStore } from "pinia";
import { useObserver } from '../helpers/useObserver.js'

export const useNavbarStore = defineStore('navbarStore', {
    state: () => {
        return {
            ariaLabel: 'Abrir menú',
            classListMenu : 'navbar__menu',
            classListToggle: 'toggle',
            isActive: false,
            linksMenu : [
                { href: '#home', name: 'Inicio'},
                { href: '#about', name: 'Sobre mí'},
                { href: '#projects', name: 'Proyectos'},
                { href: '#contact', name: 'Contacto'},
            ]
        }
    },
    actions: {
        openMenu () {
            
            this.isActive = !this.isActive
            this.ariaLabel =  this.isActive ? 'Cerrar menú' : 'Abrir menú'
            this.classListMenu = this.isActive ? 'navbar__menu active' : 'navbar__menu'
            this.classListToggle = this.isActive ? 'toggle active' : 'toggle'
            
        },
        addActiveStatus () {

            const $links = document.querySelectorAll('.pages__link')
            const $sections = document.querySelectorAll('.section')
            useObserver($links, $sections)    

        }
    }
})