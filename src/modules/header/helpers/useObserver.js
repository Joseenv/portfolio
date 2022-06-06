const chooseOption = () => {

    let options = ( window.innerWidth <= 768 ) ? { root: null, rootMargin: "0px", threshold: 0.1 }
                                                 : { root: null, rootMargin: "0px", threshold: 0.5 }

    return options
}

export const useObserver = (links, sections) => {

    const options = chooseOption()
    const observer = new IntersectionObserver((entries) => {

        entries.forEach( entry => {
            if ( entry.isIntersecting) {
                let id = entry.target.id
                links.forEach(link => {
                    let href = link.getAttribute("href")
                    href === `#${id}` ? link.classList.add('link__active') 
                                      : link.classList.remove('link__active')
                })
            }
        })

    }, options)
    
    sections.forEach(section => observer.observe(section))
    
}