$(document).ready(function(){
    $('.hamburger-menu').click(function(e){
        e.preventDefault();
        $('nav').slideToggle();
    })

    $('#phone').mask('', {
        placeholder : 'Selecione uma das opções de telefone acima'
    })

    $('#phone').on("click",function(){
        $('#phone-type').slideDown();
    })

    
    $('#phone').on("keypress",function(){
        $('#phone-type').slideUp();
    })

    $('.cellphone').click(function(){
        $('.cellphone').attr("class","cellphone selected");
        $('.telephone').attr("class","telephone");
        $('#phone').mask('(00) 00000-0000', {
            placeholder: 'Ex.: (11) 12345-6789'
        });
    })
    $('.telephone').click(function(){
        $('.cellphone').attr("class","cellphone");
        $('.telephone').attr("class","telephone selected");
        $('#phone').mask('(00) 0000-0000', {
            placeholder: 'Ex.: (11) 1234-5678'
        });
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Ex.: 123.456.789-00'
    })

    $('#postal-code').mask('00000-000', {
        placeholder: 'Ex.: 12345-678'
    })

    $('form').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true
            },
            phone:{
                required: true
            },
            cpf:{
                required: true
            },
            address:{
                required: true
            },
            postalCode:{
                required: true
            },
        },
        messages:{
            name: 'Coloque o seu nome completo',
            email: 'Coloque um e-mail válido',
            phone: 'Coloque um número de telefone válido',
            cpf: 'Coloque um número de CPF válido',
            address: 'Coloque um endereço válido',
            postalCode: 'Coloque um CEP válido'
        },
    })
})

