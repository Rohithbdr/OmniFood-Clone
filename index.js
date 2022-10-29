let navbar = document.getElementById("navbar");
let ham = document.getElementById("ham");
let navItem  = document.querySelectorAll('.nav-link');
let header = document.querySelector('header');


ham.onclick = () => {
    navbar.classList.toggle("active");
    ham.classList.toggle("cross");
}

navItem.forEach((event) => {
    event.onclick = () => {
        navbar.classList.remove("active");
        ham.classList.remove("cross");
    }
} )

window.addEventListener('scroll' , (event) => {
    if(window.scrollY > 760) {
        header.style.backgroundColor = "#fff";
        header.style.position = "fixed";
    } else {
        header.style.backgroundColor = "#fdf2e9";
        header.style.position = "static";
    }
})

