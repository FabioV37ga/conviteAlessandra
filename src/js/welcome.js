var welcomeWindow = document.querySelector(".window")
welcomeWindow.children[2].addEventListener("animationend", ()=>{
    welcomeWindow.remove()
})