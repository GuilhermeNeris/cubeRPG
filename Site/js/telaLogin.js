function EntrarNaConta(){
    let email = input_emailUser.value
    let senha = input_senhaUser.value
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
    
    if(email == '' && senha == ''){
        alert('Preencha todos os campos para prosseguir!')
        var input1 = document.getElementById('input_emailUser');
        var input2 = document.getElementById('input_senhaUser');
        input1.style.borderColor = 'red';
        input2.style.borderColor = 'red';
    }else if(email == ''){
        alert('Você deve informar o seu email para prosseguir!')
        var input = document.getElementById('input_emailUser');
        input.style.borderColor = 'red';
    }else if(senha == ''){
        alert('Você deve informar uma senha para prosseguir!')
        var input = document.getElementById('input_senhaUser');
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
        var input1 = document.getElementById('input_emailUser');
        var input2 = document.getElementById('input_senhaUser');
        input1.style.borderColor = 'green';
        input2.style.borderColor = 'green';
        alert('Login realizado com sucesso!')
        window.location.href = 'index.html';
    }
}

function NaoTenhoConta(){
    window.location.href = 'telaCadastro.html';
}

function home(){
    window.location.href = 'index.html';
}

function cubeplay(){
    window.location.href = 'index.html#meuFrame';
}

function sobreMim(){
    window.location.href = 'SobreMim.html';
}

function login(){
    window.location.href = 'telaCadastro.html';
}

function inicio(){
    window.location.href = 'index.html';
}

function biblioteca(){
    window.location.href = 'index.html#FrameBiblioteca';
}