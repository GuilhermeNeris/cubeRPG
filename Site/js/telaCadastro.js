function Cadastrar(){
    let nome = input_nomeUser.value
    let email = input_emailUser.value
    let senha = input_senhaUser.value
    let senha2x = input_senha2xUser.value
    let tamanhoSenha = senha.length
    let indiceArroba = email.indexOf("@")
    let indiceEmail = email.indexOf("email")
    let indiceCom = email.indexOf(".com")

    // variaveis para validação de números nos campos nescessários (Senha e confimação de senha)

    senha = document.getElementById('input_senhaUser').value;
    var temNumeroSenha = false;

    for (var i = 0; i < senha.length; i++) {
        var caractere = senha[i];
        if (!isNaN(caractere) && caractere !== '') { // Verifica se é um número e não um espaço em branco
            temNumeroSenha = true;
            break;
        }
    }
    
    if(nome == '' && email == '' && senha == '' && senha2x == ''){
        alert('Preencha todos os campos para prosseguir!')
        var input1 = document.getElementById('input_nomeUser');
        var input2 = document.getElementById('input_emailUser');
        var input3 = document.getElementById('input_senhaUser');
        var input4 = document.getElementById('input_senha2xUser');
        input1.style.borderColor = 'red';
        input2.style.borderColor = 'red';
        input3.style.borderColor = 'red';
        input4.style.borderColor = 'red';


    }else if(nome == ''){
        alert('Você deve informar seu nome para prosseguir!')
        var input = document.getElementById('input_nomeUser');
        input.style.borderColor = 'red';
    }else if(email == ''){
        alert('Você deve informar o seu email para prosseguir!')
        var input = document.getElementById('input_emailUser');
        input.style.borderColor = 'red';
    }else if(senha == ''){
        alert('Você deve informar uma senha para prosseguir!')
        var input = document.getElementById('input_senhaUser');
        input.style.borderColor = 'red';
    }else if(senha != senha2x){
        alert('A senha que você digitou não condiz com a confimação de senha. por favor verifique se você digitou os campos corretamente')
        var input = document.getElementById('input_senha2xUser');
        input.style.borderColor = 'red';
    }else if(tamanhoSenha <= 5){
         alert('A senha deve ter mais de 5 caracteres!')
         var input = document.getElementById('input_senhaUser');
        input.style.borderColor = 'red';
    }else if(temNumeroSenha == false){
        alert('A senha deve conter pelo menos um número!')
        var input = document.getElementById('input_senhaUser');
        input.style.borderColor = 'red';
    }else if(indiceArroba == -1){
        alert('O seu email deve ter [@]')
        var input = document.getElementById('input_emailUser');
        input.style.borderColor = 'red';
    }else if(indiceEmail == -1){
        alert('O seu email deve ter dominio [email] para prosseguir!')
        var input = document.getElementById('input_emailUser');
        input.style.borderColor = 'red';
    }else if(indiceCom == -1){
        alert('O seu email deve ter o dominio [.com] para prosseguir!')
        var input = document.getElementById('input_emailUser');
        input.style.borderColor = 'red';
    } else{
        var input1 = document.getElementById('input_nomeUser');
        var input2 = document.getElementById('input_emailUser');
        var input3 = document.getElementById('input_senhaUser');
        var input4 = document.getElementById('input_senha2xUser');
        input1.style.borderColor = 'green';
        input2.style.borderColor = 'green';
        input3.style.borderColor = 'green';
        input4.style.borderColor = 'green';
        alert('Cadastro realizado com sucesso!')
        window.location.href = 'telaLogin.html';
    }

}

function home(){
    window.location.href = 'index.html';
}

function login(){
    window.location.href = 'telaCadastro.html'
}

function cubePlay(){
    window.location.href = 'index.html#meuFrame';
}

function inicio(){
    window.location.href = 'index.html';
}

function sobreMim(){
    window.location.href = 'SobreMim.html';
}

function IrParaTelaLogin(){
    window.location.href = 'telaLogin.html';
}

function biblioteca(){
    window.location.href = 'index.html#FrameBiblioteca';
}