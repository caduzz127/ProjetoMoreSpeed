console.log("Script modalPalpiteCopa.js carregado com sucesso!");

window.addEventListener("load", function () {
    if (!localStorage.getItem("modalCopaVisto")) {
        document.getElementById("modalCopa").style.display = "flex";
    }
});

function fecharModalCopa() {
    document.getElementById("modalCopa").style.display = "none";
    localStorage.setItem("modalCopaVisto", "true");
}