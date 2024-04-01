let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    amigos.push(nome);

    if (lista.innerHTML == '') {
        lista.innerHTML = nome;
    } else {
        lista.innerHTML = lista.innerHTML + ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }

}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}