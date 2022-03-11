'use strict';
// make navbar transparent when its on the top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>
{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
  
});

// Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});



//  Handle click on "contac me" on home

const homeContacBtn = document.querySelector('.home__contact');
homeContacBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
    
});


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;//1 (붍투명)
});

//  Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});
//  Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});
// Projects 
const workBtnContainer = document.querySelector('.work__categories');
const ProjectContainer = document.querySelector('.work__projects');
const Projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   if (filter == null) {
       return;
   }

//    Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  
  if (active != null){
  active.classList.remove('selected');
  } 
  e.target.classList.add('selected'); 

ProjectContainer.classList.add('anim-out');
   console.log(filter);
   
    setTimeout(() => {
         Projects.forEach((Project) => {
        console.log(Project.dataset.type);
        if (filter === '*' || filter === Project.dataset.type){       
         Project.classList.remove('invisible');
        } else {
            Project.classList.add('invisible');
        }
    });
        ProjectContainer.classList.remove('anim-out');
    }, 300);
});

 function scrollIntoView(selector) {
    const scrollTo =document.querySelector(selector);
    scrollTo.scrollIntoView({ 
    behavior: 'smooth'
 });
}