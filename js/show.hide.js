function ativarSobre() {
    document.getElementById("sobre").style.display = "block";
    document.getElementById("certificados").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("engenheiro").style.display = "none";
}

function ativarCertificado() {
    document.getElementById("sobre").style.display = "none";
    document.getElementById("certificados").style.display = "block";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("engenheiro").style.display = "none";
}

function ativarProjetos() {
    document.getElementById("sobre").style.display = "none";
    document.getElementById("certificados").style.display = "none";
    document.getElementById("projetos").style.display = "block";
    document.getElementById("engenheiro").style.display = "none";
}

function ativarEngenheiro() {
    document.getElementById("sobre").style.display = "none";
    document.getElementById("certificados").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("engenheiro").style.display = "block";
}