document.querySelector(".presenca-close").addEventListener("click", () => {
    togglePresencaWindow()
})

document.querySelector(".presenca").addEventListener("click", () => {
    togglePresencaWindow()
})

var presencaWindow = document.querySelector(".presenca-append")
function togglePresencaWindow() {
    // mapWindow.style.display = 'none'
    // giftWindow.style.display = 'none'
    presencaWindow.style.display = presencaWindow.style.display == "none" ? 'initial' : 'none';
}

var elementoAdd = document.querySelector(".form-add");
elementoAdd.onclick = ()=>{var a = new PresencaItem}