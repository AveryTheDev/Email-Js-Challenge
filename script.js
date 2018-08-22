
let options = document.getElementsByClassName("choice");

let picked = Array.from(options);

picked.forEach(pick => pick.addEventListener("click", e =>
    e.target.classList.toggle("select")
))