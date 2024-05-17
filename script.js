let numeroSecreto=parseInt(Math.random()*100);
let tentativas = 0;
let maxTentativas = 10;
let restaTentativas = maxTentativas;

document.getElementById('p').innerHTML='Tentativas: ' + tentativas;
document.getElementById('tentativas-restantes').innerHTML='Tentativas restantes: ' + restaTentativas;

function geraNumero()
{
   numeroSecreto=parseInt(Math.random()*100);
   tentativas = 0;
   document.getElementById('x').value="";
   document.getElementById('x').focus();
   document.getElementById('p').innerHTML='Tentativas: ' + tentativas;
}

function testeJogo()
{
   let chute = document.getElementById('x').value;
   if (numeroSecreto == chute)
   {
      alert('Você acertou!\nJogue novamente\nUm novo número secreto foi gerado');
      numeroSecreto=parseInt(Math.random()*100);
      document.getElementById('x').value="";
      geraNumero();
   }
   else if (numeroSecreto < chute)
   {
      alert('Você digitou um número maior!');
      tentativas++;
      restaTentativas = maxTentativas - tentativas;
      document.getElementById('p').innerHTML="Tentativas: " + tentativas;
      
   }
   else if (numeroSecreto > chute)
   {
      alert('Você digitou um número menor!');
      tentativas++;
      restaTentativas = maxTentativas - tentativas;
      document.getElementById('p').innerHTML="Tentativas: " + tentativas;
   }
   
   document.getElementById('x').focus();
}
