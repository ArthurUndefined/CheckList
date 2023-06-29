document.querySelector('#AtividadeADD').addEventListener("click", FunctionADD);

function FunctionADD(){
    let AtividadeValue = document.querySelector('#Atividade').value; 

    let AtividadeAdcionada = document.createElement("P");
    let conteudoInserido = document.createTextNode(AtividadeValue);
    AtividadeAdcionada.appendChild(conteudoInserido)

    let main = document.querySelector("section");
    document.body.insertBefore(AtividadeAdcionada, main);
}