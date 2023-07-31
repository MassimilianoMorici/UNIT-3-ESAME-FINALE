
// DEFINISCO IL COMPORTAMENTO DEL MENù A COMPARSA ACCOUNT
var dropdownToggle = document.querySelector('#toggleMod');
var dropdownMenu = document.querySelector('#menuMod');

dropdownToggle.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
});

dropdownToggle.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
});

dropdownMenu.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
});

dropdownMenu.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
});
// FINE


// DEFINISCO IL COMPORTAMENTO DEL RICERCA CLICCANDO L'ICONA SEARCH
// COMPARSA BARRA RICERCA
function toggleSearch(event,) {
    var searchContainer = document.querySelector('#searchContainer');
    var searchInput = document.querySelector('#searchInput');

    if (searchContainer.style.display === 'none') {
        searchContainer.style.display = 'block';
        searchInput.focus();
        event.stopPropagation();
    } else {
        searchContainer.style.display = 'none';
    }
}
// RIMOZIONE BARRA RICERCA
document.addEventListener('click', function (event) {
    var searchContainer = document.querySelector('#searchContainer');
    var target = event.target;

    if (target !== searchContainer && !searchContainer.contains(target)) {
        searchContainer.style.display = 'none';
    }
});
// FINE



// EFFETTO DISSOLVENZA CAROSELLI CON SCROLL
const carousels = document.querySelectorAll('.carousel');

function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


function handleCarouselVisibility() {
    carousels.forEach(carousel => {
        if (isElementVisible(carousel)) {
            carousel.classList.add('visible');
        } else {
            carousel.classList.remove('visible');
        }
    });
}


window.addEventListener('scroll', handleCarouselVisibility);

handleCarouselVisibility();

// FINE
