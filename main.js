const form = document.getElementById('formAB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);

    if(isNaN(numA) || isNaN(numB)){
        showMessage('Por favor entrar com numeros validos em ambos os campos', 'invalido');
        } else if (numA > numB){
            showMessage(`Número ${numA} é maior que ${numB}, A checagem é válida.`, 'valido');
        } else {
            showMessage(`Número ${numA} é menor ou igual a ${numB}, A checagem é inválida.`, 'invalido');
        }
});

function showMessage(message, type){

    const messageElement = document.getElementById('validationMessage');

    messageElement.textContent = message;

    messageElement.classList.remove('valido-message', 'invalido-message');

    if(type === 'valido') {
        messageElement.classList.add('valido-message');
    } else{
        messageElement.classList.add('invalido-message');
    }

}