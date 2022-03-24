let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result')

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva alguma palavra no campo de busca!!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultado.innerHTML = `
            <h3 id="container__palavra">${palavra}</h3>
                <p id="container__significado"><span>1º</span> ${data[0].meanings[0]}</p>
                <p id="container__significado"><span>2º</span> ${data[0].meanings[1]}</p>
            `

        }).catch(() => {
            resultado.innerHTML = `<p id="container__significado"><span>Não</span> foi possivel encontrar está palavra!! </p>`
        })
    }
})