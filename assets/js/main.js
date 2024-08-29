"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};

/* ===== Page Loader ====== */
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});


/* ===== Nav Link & Page Banner ====== */
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop(); 
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (currentPage === 'index.html') {
        return;
    }

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    dropdownItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage) {
            item.classList.add('active');
            const parentDropdown = item.closest('.dropdown-menu');
            if (parentDropdown) {
                parentDropdown.previousElementSibling.classList.add('active');
            }
        }
    });
});
