function calcularFuso(){
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    // obtém e converte o conteúdo do campo
    var HoraBrasil = Number(inHoraBrasil.value);

    // se não preencheu ou Not-a-number (NaN)
    if(inHoraBrasil.value == "" || isNaN(HoraBrasil)){
        alert("Informe a hora no Brasil corretamente");
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = HoraBrasil + 5;

    // se passar das 24 horas na França...
    if(horaFranca >= 24){
        horaFranca = horaFranca - 24;
    }

    // exibe o resultado
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

// criar referência ao botão e registrar evento
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);