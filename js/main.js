function voltar(){
    document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    alert("trocar texto");
}

function redirecionar(){
    window.open("https://www.google.com.br");
    
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar!");
}

/*
function soma(n1,n2){
    return n1+n2;
}

function validaIdade(idade){
    var valida;
    if (idade>=18) {
        validar = true;
    }elsee{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual a sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma(5,10))


/*
var d = new Date();
alert(d.getDay);

*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/
/*
var count = 5;
while (count <= 5){
    console.log(count);
    count = count +1;
}
*/
/*
var idade = prompt("qual sua idade");

if (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva" , cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã","pera",'laranja'];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "))




//var nome = "Thiago Torres";
//var n1 = 21;
//var n2 = 25;
//var frase = "Japão é o melhor time do mundo!"

//alert(nome + "tem" + idade + "anos");

//alert(idade + idade2)

//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));