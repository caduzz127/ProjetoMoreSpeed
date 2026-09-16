const modalOverlayPreCadastro = document.getElementById("modal-overlay-pre-cadastro");

const modalPreCadastro = document.getElementById("modal-pre-cadastro");

const btnFecharModalPreCadastro = document.getElementById("close-modal-pre-cadastro");
/*
    ABRIR MODAL
*/
function abrirModalPreCadastro() {
    modalOverlayPreCadastro.classList.add("ativo");
    document.body.style.overflow = "hidden";

}

function fecharModalPreCadastro() {
    modalOverlayPreCadastro.classList.remove("ativo");
    document.body.style.overflow = "";
}

/*
    FECHAR PELO X
*/
btnFecharModalPreCadastro.addEventListener("click", () => {
    fecharModalPreCadastro();
});
/*
    FECHAR CLICANDO FORA
*/

modalOverlayPreCadastro.addEventListener("click", (event) => {
    if (event.target === modalOverlayPreCadastro) {
        fecharModalPreCadastro();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (modalOverlayPreCadastro.classList.contains("ativo")) {
        document.body.style.overflow = "hidden";
    }
});


function fazerPreCadastro() {
    window.location.href = "telaCadastro.php";
}