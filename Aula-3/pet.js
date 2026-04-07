function gerarCracha() {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const raca = document.getElementById("raca").value;
    const fotoInput = document.getElementById("Foto");

    if (!fotoInput.files[0]) {
        alert("Por favor escolha uma foto");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const imageURL = e.target.result;

        document.getElementById("resultado").innerHTML = 
            <div class="cracha"> 
                <img src="${imageURL}" alt="Foto do pet">
                <h2>${nome}</h2>
                <p><strong>Raça:</strong> ${raca}</p>
                <p><strong>Peso:</strong> ${peso}</p>
            </div>
        ;
    };

    reader.readAsDataURL(fotoInput.files[0]);
}

