                                                                                        //animation for clicking the bar 
const menu = document.querySelector('#mobile-menu')                                                 //target name declared in html
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// To LinkedIn from tech page button
