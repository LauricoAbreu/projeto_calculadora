const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);

    if (numeroB > numeroA) {
        alert('Número B é maior que o número A. Formulário válido!');
    } else {
        alert('Número B deve ser maior que o número A. Formulário inválido!');
    }
});

console.log(form);