const pedra = document.querySelector('.pedra')
const papel = document.querySelector('.papel')
const tesoura = document.querySelector('.tesoura')
const result = document.querySelector('.result')
const options = document.querySelector('#optionsId')
const voltarBtn = document.querySelector('.voltarBtn')

window.onload = function () {
    options.classList.add("options");

}

pedra.addEventListener("click", playPedra);
papel.addEventListener("click", playPapel);
tesoura.addEventListener("click", playTesoura);



function playPedra() {

    options.innerHTML = ''
    options.classList.remove("options")

    const escolhaJogadorDiv = document.createElement("div")
    escolhaJogadorDiv.classList.add('escolha-jogador')

    const escolhaJogadorH1 = document.createElement("h1")

    options.appendChild(escolhaJogadorDiv)
    escolhaJogadorDiv.appendChild(escolhaJogadorH1)

    escolhaJogadorH1.innerHTML = '<p>Você Jogou:<br> Pedra <br><img class="img-resposta-pedra"  src="pedra.png"></p>'


    const escolhaPcDiv = document.createElement("div")
    escolhaPcDiv.classList.add('escolha-pc')

    const escolhaPcH1 = document.createElement("h1")
    options.appendChild(escolhaPcDiv)
    escolhaPcDiv.appendChild(escolhaPcH1)

    const escolhas = [pedra, papel, tesoura]
    const respostaPC = Math.floor(Math.random() * escolhas.length);

    if (respostaPC === 0) {

        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Pedra<br> <img class="img-resposta-pedra" src="pedra.png"></p>'

        result.innerHTML = '<h1>EMPATE!!</h1>'
    } else if (respostaPC === 1) {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Papel<br><img class="img-resposta-papel" src="papel.PNG"></p>'

        result.innerHTML = '<h1>Você Perdeu!!</h1>'

    } else {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Tesoura<br><img class="img-resposta-tesoura" src="tesoura.PNG"></p>'

        result.innerHTML = '<h1>Você Ganhou!!</h1>'
    }

    voltarBtn.style.display = 'flex'

}

function playPapel() {
    options.innerHTML = ''
    options.classList.remove("options")

    const escolhaJogadorDiv = document.createElement("div")
    escolhaJogadorDiv.classList.add('escolha-jogador')

    const escolhaJogadorH1 = document.createElement("h1")

    options.appendChild(escolhaJogadorDiv)
    escolhaJogadorDiv.appendChild(escolhaJogadorH1)

    escolhaJogadorH1.innerHTML = '<p>Você Jogou:<br> Papel <br><img class="img-resposta-papel"  src="papel.PNG"></p>'


    const escolhaPcDiv = document.createElement("div")
    escolhaPcDiv.classList.add('escolha-pc')

    const escolhaPcH1 = document.createElement("h1")
    options.appendChild(escolhaPcDiv)
    escolhaPcDiv.appendChild(escolhaPcH1)

    const escolhas = [pedra, papel, tesoura]
    const respostaPC = Math.floor(Math.random() * escolhas.length);

    if (respostaPC === 0) {

        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Pedra<br> <img class="img-resposta-pedra" src="pedra.png"></p>'

        result.innerHTML = '<h1>Você Ganhou!!</h1>'
    } else if (respostaPC === 1) {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Papel<br><img class="img-resposta-papel" src="papel.PNG"></p>'

        result.innerHTML = '<h1>EMPATE!!</h1>'

    } else {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Tesoura<br><img class="img-resposta-tesoura" src="tesoura.PNG"></p>'

        result.innerHTML = '<h1>Você Perdeu!!</h1>'
    }

    voltarBtn.style.display = 'flex'
}

function playTesoura() {
    options.innerHTML = ''
    options.classList.remove("options")

    const escolhaJogadorDiv = document.createElement("div")
    escolhaJogadorDiv.classList.add('escolha-jogador')

    const escolhaJogadorH1 = document.createElement("h1")

    options.appendChild(escolhaJogadorDiv)
    escolhaJogadorDiv.appendChild(escolhaJogadorH1)

    escolhaJogadorH1.innerHTML = '<p>Você Jogou:<br> Tesoura <br><img class="img-resposta-tesoura" src="tesoura.PNG"></p>'


    const escolhaPcDiv = document.createElement("div")
    escolhaPcDiv.classList.add('escolha-pc')

    const escolhaPcH1 = document.createElement("h1")
    options.appendChild(escolhaPcDiv)
    escolhaPcDiv.appendChild(escolhaPcH1)

    const escolhas = [pedra, papel, tesoura]
    const respostaPC = Math.floor(Math.random() * escolhas.length);

    if (respostaPC === 0) {

        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Pedra<br> <img class="img-resposta-pedra" src="pedra.png"></p>'

        result.innerHTML = '<h1>Você Perdeu!!</h1>'
    } else if (respostaPC === 1) {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Papel<br><img class="img-resposta-papel" src="papel.PNG"></p>'

        result.innerHTML = '<h1>Você Ganhou!!</h1>'

    } else {
        escolhaPcH1.innerHTML = '<p>Computador jogou:<br> Tesoura<br><img class="img-resposta-tesoura" src="tesoura.PNG"></p>'

        result.innerHTML = '<h1>EMPATE!!</h1>'
    }

    voltarBtn.style.display = 'flex'

}

voltarBtn.addEventListener("click", voltar)

function voltar() {
    window.location.reload(true);
}
