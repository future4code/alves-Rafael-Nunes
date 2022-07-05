function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let ocorrencias = 0
for(let i = 0; i<arrayDeNumeros.length; i++){
if(arrayDeNumeros[i] === numeroEscolhido){
ocorrencias ++
}
}
if(ocorrencias>0){
return`O ${numeroEscolhido} aparece ${ocorrencias`
