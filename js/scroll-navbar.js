window.onload = init;

var navBar;
var navBarTop;

function init()
{
    console.log("Initializing...");

    navBar = document.getElementById("navigation");
    navBarTop = navBar.offsetTop;

    window.addEventListener('scroll', stickyNavigation);
}

function stickyNavigation()
{

    if(window.scrollY >= navBarTop)
    {
        navBar.classList.add('menu-fixed');
    }
    else
    {
        navBar.classList.remove('menu-fixed');
    }
}

