
console.log("Script modalPalpiteCopa.js carregado com sucesso!");

window.addEventListener("load", function () {

        document.getElementById("modalCopa").style.display = "flex";
    
});

function fecharModalCopa() {
    const iconeBolaDeFutebol = document.getElementById("bola-flutuante");
    iconeBolaDeFutebol.classList.remove("inativo");
    document.getElementById("modalCopa").style.display = "none";
    
}