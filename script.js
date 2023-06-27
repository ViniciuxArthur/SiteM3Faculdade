function mostrarDiv(resposta) {
    var div = document.getElementById('div-resposta');
    div.style.display = 'flex';
    var paragrafo = div.querySelector('p');
    if (resposta === 'sim') {
    paragrafo.innerText = 'Obrigado então e até outra matéria!';
    var div = document.getElementById('provar');
    div.style.display = 'none';
    } else if (resposta === 'nao') {
    paragrafo.innerText = 'como assim não?! vou ter que te provar que mereço então...';
    var div = document.getElementById('provar');
    div.style.display = 'flex';
    }

}

function provarDiv(){
    var div= document.getElementById('div-pergunta');
    div.style.display = 'none';
    var div= document.getElementById('div-sim');
    div.style.display = 'none';
    var div= document.getElementById('div-nao');
    div.style.display = 'none';
    var div= document.getElementById('div-resposta');
    div.style.display = 'none';
    var div = document.getElementById('div-table');
    div.style.display = 'flex';
    var div = document.getElementById('escolherBimestre');
    div.style.display = 'flex';
    var div= document.getElementById('bimestre1');
    div.style.display = 'flex';
    var div= document.getElementById('bimestre2');
    div.style.display = 'flex';
    var div= document.getElementById('bimestre3');
    div.style.display = 'flex';

}
function mostrarTable(tabela) {
    if (tabela === 'tabela1') {
    var div= document.getElementById('tabelaBimestre1');
    div.style.display = 'flex';
    var div= document.getElementById('tabelaBimestre2');
    div.style.display = 'none';
    var div= document.getElementById('tabelaBimestre3');
    div.style.display = 'none';
    } else if (tabela === 'tabela2') {
    var div= document.getElementById('tabelaBimestre1');
    div.style.display = 'none';
    var div= document.getElementById('tabelaBimestre2');
    div.style.display = 'flex';
    var div= document.getElementById('tabelaBimestre3');
    div.style.display = 'none';
    } else if (tabela === 'tabela3') {
    var div= document.getElementById('tabelaBimestre1');
    div.style.display = 'none';
    var div= document.getElementById('tabelaBimestre2');
    div.style.display = 'none';
    var div= document.getElementById('tabelaBimestre3');
    div.style.display = 'flex';
    }
}