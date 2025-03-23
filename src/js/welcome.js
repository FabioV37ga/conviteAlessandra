var closeButton = document.querySelector(".welcome-close")
closeButton.addEventListener("click", () => {
    document.querySelector(".texto").classList.add('fadeout')
    var squares = document.querySelectorAll(".square")
    for (let i = 0; i <= squares.length - 1; i++){
        squares[i].classList.add(`throwOut${i}`)
    }
})


var welcomeWindow = document.querySelector(".window")
welcomeWindow.children[2].addEventListener("animationend", () => {
    welcomeWindow.remove()
})