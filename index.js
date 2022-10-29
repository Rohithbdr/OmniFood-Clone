let navbar = document.getElementById("navbar");
let ham = document.getElementById("ham");


ham.onclick = () => {
    navbar.classList.toggle("active");
    ham.classList.toggle("cross")
}