 function gerarCracha() {
      const nome = document.getElementById("nome").value;
      const raca = document.getElementById("raca").value;
      const peso = document.getElementById("peso").value;
      const fotoInput = document.getElementById("foto");

      if (!fotoInput.files[0]) {
        alert("Por favor, selecione uma foto!");
        return;
      }

      const reader = new FileReader();

      reader.onload = function(e) {
        const imagemURL = e.target.result;

        document.getElementById("resultado").innerHTML = `
          <div class="cracha">
            <img src="${imagemURL}" alt="Foto do pet">
            <h2>${nome}</h2>
            <p><strong>Raça:</strong> ${raca}</p>
            <p><strong>Peso:</strong> ${peso} kg</p>
          </div>
        `;
      };

      reader.readAsDataURL(fotoInput.files[0]);
    }