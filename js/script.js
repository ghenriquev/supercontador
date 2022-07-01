function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.querySelector('input#passo');
    var res = document.querySelector('div#res');
    var n1 = Number(inicio.value);
    var n2 = Number(fim.value);
    var n3 = Number(passo.value);
    res.innerHTML = 'Contagem '

    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('[ERRO] Preencha todos os campos!');
    } else if (n1 == 0 && n2 == 0){
        alert('[ERRO] Impossível contar!');
    } else if (passo.value.length == 0) {
        alert('[ERRO] O passo será reajustado para 1!');
        n3 = 1;
    }

    if (n1 <= n2){
        res.innerHTML += 'crescente: '
        for (; n1 <= n2; n1 += n3) {
            res.innerHTML += `${n1}${String.fromCodePoint(0x1F449)}`
        }
        res.innerHTML += `${String.fromCodePoint(0x1F3C1)}`
    } else if (n2 <= n1) {
        res.innerHTML += 'decrescente: '
        for (; n2 <= n1; n1 -= n3){
            res.innerHTML += `${n1}${String.fromCodePoint(0x1F449)}`
        }
        res.innerHTML += `${String.fromCodePoint(0x1F3C1)}`
    } else {
        res.innerHTML = `Tente novamente. ${String.fromCodePoint(0x1F61F)}`
    }
    
}