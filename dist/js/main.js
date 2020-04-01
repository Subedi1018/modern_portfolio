// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
// for each item
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of the menu
// Variable to represent if its open or not
let showMenu = false;

// Now we want eventListener.. all things should be happen after clicking that menu bars
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        // nav items are more than one-- show loop through each one of them
        navItems.forEach(item=> item.classList.add('show'));

        // Set Menu state
        showMenu = true;
    }else{
        // if the menu is shown and we want to close it. add remove classes
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        // nav items are more than one-- show loop through each one of them
        navItems.forEach(item=> item.classList.remove('show'));

        // Set Menu state
        showMenu = false;

    }
}
