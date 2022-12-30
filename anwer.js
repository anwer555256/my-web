const ull=document.querySelector('.ull');
const nav_button=document.querySelector('.nav_button');
nav_button.addEventListener('click',() => {
    const visible=ull.getAttribute("data-visible")
    if (visible==="false") {
        ull.setAttribute("data-visible", "true");
        ull.setAttribute("aria-expanded", "true");
    }else if(visible==="true"){
        ull.setAttribute("data-visible", "false")
        ull.setAttribute("aria-expanded", "false");
    }
} );
