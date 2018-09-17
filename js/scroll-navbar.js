window.onload = init;

var navBar;
var navBarTop;
var endlessScroll;

function init()
{
    console.log("Initializing...");

    navBar = document.getElementById("navigation");
    navBarTop = navBar.offsetTop;

    endlessScroll = document.getElementById("endlessScroll")

    window.addEventListener('scroll', stickyNavigation);
}

function stickyNavigation()
{

    console.log("endless: " + endlessScroll.offsetTop);

    if(window.scrollY >= navBarTop)
    {
        navBar.classList.add('uhr-navigation-fixed');
    }
    else
    {
        navBar.classList.remove('uhr-navigation-fixed');
    }
}

