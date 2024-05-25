let numeroSecreto= parseInt(Math.random()*100);
let vezesjogadas = 0;

function geranumero()
{
 numeroSecreto=parseInt(Math.random()*100);
 document.getElementById('x').value="";
 document.getElementById('x').focus();
 document.getElementById('t').value-"";
}

function testejogo()
{
    vezesjogadas = vezesjogadas +1;

 let chute = document.getElementById('x').value;

 if (numeroSecreto < chute)
 {
    alert('Você digitou um número maior!');
    document.getElementById('t').value=vezesjogadas;    
 }

 else if (numeroSecreto > chute)
 {
    alert('Você digitou um número menor!');
    document.getElementById('t').value=vezesjogadas;
 }

 else if (numeroSecreto == chute)
 {
    alert('Você acertou!\nJogue denovo\nUm novo número secreto foi gerado');
    numeroSecreto=parseInt(Math.random()*100);
    document.getElementById('x').value="";
    document.getElementById('t').value=null;
 }

 document.getElementById('x').focus();
}