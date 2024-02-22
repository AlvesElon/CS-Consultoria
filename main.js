const form = document.getElementById("form-data");
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();
    addLinha();
    atualizaTabela();
});

function addLinha() {
    const inputNome = document.getElementById("nome")
    const inputTelefone = document.getElementById("telefone")

    let linha = "<tr>";
    linha += `<td>${inputNome.value} </td>`;
    linha +=`<td>${inputTelefone.value} </td>`;
    linha += "<tr>";

    linhas += linha;

    inputNome.value = "";
    inputTelefone.value = "";
}

function atualizaTabela() {
    const body_table = document.querySelector("tbody")
    body_table.innerHTML = linhas
}