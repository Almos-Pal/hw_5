function galeria(kep) {
    let text = document.getElementById("text");
    let img = document.querySelector(".big-picture");
    img.src = kep.src;
    text.innerHTML = kep.alt;
    img.parentElement.style.display = "block"
    console.log(kep);
}


document.getElementById("bezar").addEventListener("click", bezar);

function bezar() {
    document.getElementById("bezar").parentElement.style.display = "none";
}


