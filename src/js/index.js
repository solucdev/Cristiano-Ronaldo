const botoes = document.querySelectorAll('.button')
console.log(botoes)
const cristianos = document.querySelectorAll(".cristiano")

botoes.forEach((botao, indice)=>{
    botao.addEventListener("click", () => {
        const botaoSelec = document.querySelector(".button.selecionado")

        botaoSelec.classList.remove("selecionado")
        botao.classList.add("selecionado")

        const crisSelec = document.querySelector(".cristiano.selecionado")
        crisSelec.classList.remove("selecionado")

        cristianos[indice].classList.add("selecionado")
    })
})