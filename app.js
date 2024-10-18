const sideMenu = document.querySelector('#sideMenu')
const navBar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)'
}

var typed = new Typed('#element', {
    strings: ['Wordpress Developer','Seo master','Digital Marketer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20')
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:bg-transparent')
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:border','dark:border-white/70','dark:bg-transparent')
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:bg-transparent')
    }
})

//Light Mode  and Dark mode
localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }
}