const navSlide = () => {
    const burger = document.querySelector(".nav__burger")
    const navMenu = document.querySelector(".nav__menu")
    const navLinks = document.querySelectorAll(".nav__link");
    // const burgerLines = burger.children;

    burger.addEventListener('click', ()=> {
        navMenu.classList.toggle('nav__menu--active')

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 10 + 0.5}s`
            }
          
        })

        burger.classList.toggle('toggle')
    })

    console.log(navLinks)
    navLinks.addEventListener('click', ()=> {
        navMenu.classList.toggle('nav__menu--active')
        burger.classList.toggle('toggle')
    })

    
}

navSlide();