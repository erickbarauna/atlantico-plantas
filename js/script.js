function cadastrar(){

    var dados = $ ('#cadastro').serialize();
    //rotina de gravação ==================

    $ajax({
        method: 'post',
        url: 'cadastro.php',
        data: dados,

        beforeSend: function (){
            $('#resposta').html('Aguarde....');
        }
    })

    .done(function(RetornoPHP){
        $('#resposta').html(RetornoPHP);
    })
    fail (function(){
        alert("Falha na comunicação");
    })
    return false;

}