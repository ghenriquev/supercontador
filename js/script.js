function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.querySelector('input#passo');
    var res = document.querySelector('div#res');
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    res.innerHTML = 'Contagem ';

    if (inicio.value.length == 0 || fim.value.length == 0) {

        // Início ou fim em branco

        res.innerHTML = `Tente novamente. ${String.fromCodePoint(0x1F61F)}`;
        alert('Complete todos os campos!');

    } else if (i == 0 && f == 0) {

        // Início e fim com o valor 0

        res.innerHTML = `Tente novamente. ${String.fromCodePoint(0x1F61F)}`;
        alert('Impossível contar!');

    } else if (passo.value.length == 0 || p == 0) {

        // Passo em branco ou com valor 0

        alert('[ERRO] O passo será reajustado para 1!');
        p = 1;
    } 
    
    if (i < f && inicio.value.length != 0) {

        // Contagem crescente

        res.innerHTML += 'crescente: ';
        for (; i <= f; i += p) {
            res.innerHTML += `${i}${String.fromCodePoint(0x1F449)}`; // o emoji pode ser '\u{1F449}'
        }
        res.innerHTML += `${String.fromCodePoint(0x1F3C1)}`;

    } else if (f < i && fim.value.length != 0) {

        // Contagem decrescente

        res.innerHTML += 'decrescente: ';
        for (; f <= i; i -= p) {
            res.innerHTML += `${i}${String.fromCodePoint(0x1F449)}`;
        }
        res.innerHTML += `${String.fromCodePoint(0x1F3C1)}`;

    } else if (i == f && inicio.value.length != 0 && fim.value.length != 0) {

        // Se os campos de início e fim estiverem preenchidos com valores iguais
        res.innerHTML = `Início e fim com valores iguais. \u{1F61F}`;

    }
}