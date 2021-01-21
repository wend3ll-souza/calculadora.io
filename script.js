const teclado = document.getElementById('teclado');
const painel = document.getElementById('panel');
const teclasPainel = ['+', '-', '/', '*'];

function criandoBotoes() {
    // Digite seu Código Aqui 
    
    for(numero = 0; numero < 10; numero++) {
        const button = document.createElement('button');
        button.className = 'buttons';
        button.innerHTML = numero
        teclado.appendChild(button)
    }
    teclasPainel.forEach(tecla => {
        const button = document.createElement('button');
        button.className = 'buttons';
        button.innerHTML = tecla;
        painel.appendChild(button)
    })
}

addEventListener('click', (event) => {
    // Digite seu Código aqui

    if (event.target.className === 'buttons'){
       document.getElementById('display').value += event.target.innerHTML;
    }
     if (event.target.id === 'equal'){
    document.getElementById('display').value =  eval(document.getElementById('display').value);
    } 
    if (event.target.id === 'clear'){
        document.getElementById('display').value = " "
    }

})

window.onload = () => {
    criandoBotoes();
}