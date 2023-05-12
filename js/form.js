const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const tel = document.querySelector('#tel');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === ''){
        setErrorFor(nome, 'Nome não pode estar em branco');
    }else{
        setSuccessFor(nome);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email não pode estar em branco');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email não é válido');
    }else{
        setSuccessFor(email);
    }

    if(mensagemValue === ''){
        setErrorFor(mensagem, 'Mensagem não pode estar em branco'); 
    }else if(mensagemValue.length > 280){
        setErrorFor(mensagem, 'Mensagem deve ter menos que 280 caracteres');
    }else{
        setSuccessFor(mensagem);
    }

    if(telValue === ''){
        setErrorFor(tel, 'Telefone não pode estar em branco');
    }else if(!isPhone(telValue)){
        setErrorFor(tel, 'Digite um telefone válido');
    }else{
        setSuccessFor(tel);
    }
}

function setErrorFor(input, mensagem){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = mensagem;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(tel){
    return /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(tel);
}