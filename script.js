
let options = document.getElementsByClassName("button");

let picked = Array.from(options);

picked.forEach(pick => pick.addEventListener("click", e =>
    e.target.classList.toggle("select")
))