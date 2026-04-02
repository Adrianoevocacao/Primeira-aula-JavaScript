function calcularMedia(){
    //criar uma referencia aos Elementos da Página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");

    //Obtém os conteúdos dos campos de Edição da paginas
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value); // corrigido aqui

    //Calcular a Média das notas
    var media = (nota1 + nota2)/2;

    //Apresentar a média (Alterar o conteúdo do elemento outMedia)
    outMedia.textContent = "A média das notas é: " + media.toFixed(1);

    //Criar a Condição
    if (media >= 5){ // corrigido Media -> media
        outSituacao.textContent = "Parabéns! " + nome + " você está aprovado(a)"; // corrigido "="
        outSituacao.style.color ="blue";
    } else {
        outSituacao.textContent = "Ops! " + nome + "... infelizmente você está reprovado(a)";
        outSituacao.style.color = "red";
    }
}

// Criar uma referencia ao elemento btResultado
var btResultado = document.getElementById("btResultado");

//registra um evento associado ao botão, para carregar a função
btResultado.addEventListener("click", calcularMedia);