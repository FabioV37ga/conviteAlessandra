var containerPai = document.querySelector(".main-container")

var botaoIr = document.querySelector(".botao.dresscode");

var containerA = document.querySelector(".main-container--content");
var ladoA = document.querySelector(".info")
botaoIr.addEventListener("click", () => {
    containerA.classList.add("showBack")
    setTimeout(() => {
        ladoA.style = 'display: none'
        ladoB.style = 'display: flex'
        document.querySelector(".logo").style = 'display: none'
    }, 250);

    containerPai.classList.add("borderFade")
    setTimeout(() => {
        containerPai.classList.remove("borderFade")
    }, 800);
})

var botaoVoltar = document.querySelector(".backface-back")
var ladoB = document.querySelector(".dresscode-backface")
botaoVoltar.addEventListener("click", () => {
    containerA.classList.remove("showBack")
    setTimeout(() => {
        document.querySelector(".logo").style = 'display: flex'
        ladoA.style = 'display: flex'
        ladoB.style = 'display: none'
    }, 250);

    containerPai.classList.add("borderFade")
    setTimeout(() => {
        containerPai.classList.remove("borderFade")
    }, 800);
})


createGalleryItems()
function createGalleryItems() {
    for (let i = 0; i <= 17; i++) {
        var elementoImagem = `
                <div class="image-container">
                    <img src="src/img/dresscode/${i + 1}.jpg" alt="" srcset="">
                </div>
                `
        $(".gallery").append(elementoImagem)
        document.querySelectorAll(".image-container")[i].addEventListener('click', function (e) {
            openImage(e.currentTarget, i + 1)
        })
    }
}

function openImage(e, img) {
    document.querySelector(".dresscode-overlay").style = 'display: flex'
    // document.querySelector(".dresscode-ovelay img").setAttribute('src', `src/img/dresscode/${img}.jpg`)
    document.querySelector(".dresscode-overlay img").src = `src/img/dresscode/${img}.jpg`
}

document.querySelector(".dresscode-overlay-back-button").addEventListener("click", ()=>{
    console.log("aaa")
    document.querySelector(".dresscode-overlay").style = 'display: none'
})
