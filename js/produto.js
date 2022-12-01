function botao(){
    var produto1 = document.getElementById("Quantidade1").value;
    var valor1 = 120.00 * produto1;
    var produto2 = document.getElementById("Quantidade2").value;
    var valor2 = 60.00 * produto2;
    var produto3 = document.getElementById("Quantidade3").value;
    var valor3 = 80.00 * produto3;
    var produto4 = document.getElementById("Quantidade4").value;
    var valor4 = 50.00 * produto4;
    var produto5 = document.getElementById("Quantidade5").value;
    var valor5 = 45.00 * produto5;
    var produto6 = document.getElementById("Quantidade6").value;
    var valor6 = 450.00 * produto6;
    var produto7 = document.getElementById("Quantidade7").value;
    var valor7 = 30.00 * produto7;
    var produto8 = document.getElementById("Quantidade8").value;
    var valor8 = 47.00 * produto8;
    var produto9 = document.getElementById("Quantidade9").value;
    var valor9 = 5.00 * produto9;
    var produto10 = document.getElementById("Quantidade10").value;
    var valor10 = 6.00 * produto10;
    var produto11 = document.getElementById("Quantidade11").value;
    var valor11 = 2.00 * produto11;
    var produto12 = document.getElementById("Quantidade12").value;
    var valor12 = 2.00 * produto12;

    var total = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + valor11 + valor12;

    document.getElementById("resposta").innerHTML = "O valor total de suas compras será de R$: " + total;
}

function comprar(){
    alert("Compra bem sucedida! Por favor Retorne Para a Página inicial");
}