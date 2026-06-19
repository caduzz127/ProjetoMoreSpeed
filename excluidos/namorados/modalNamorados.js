console.log("Script modalNamorados.js carregado com sucesso!");
window.addEventListener("load", function() {
    console.log("modal dos namorados: ", document.getElementById("modalNamorados"));
    document.getElementById("modalNamorados").style.display = "flex";
});
function fecharModalNamorados(){
    document.getElementById("modalNamorados").style.display = "none";
}