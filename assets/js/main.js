//prevenir envio do evento
function prevenirEnvio(){
    const form = document.querySelector('#form');
    // ao clicar em enviar, executa a função
    form.addEventListener('submit', function(event){
        event.preventDefault();    
        const inputPeso = event.target.querySelector('#peso');
        const inputAltura = event.target.querySelector('#altura');     
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso) {
            setResultado('Peso inválido');
            return;
        }
        if(!altura || altura < 1) {
            setResultado('Altura inválida')
            return;
        }
        setResultado(calculaIMC(peso,altura)); 
    });
}
prevenirEnvio();

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
    
    /*  outra forma de adicionar
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qss';
    resultado.appendChild(p);
    */
}

function calculaIMC(m, h){
    const imc = m / Math.pow(h/100,2);
    let valorImc;
    if(imc < 18.5) return valorImc = `${imc.toFixed(1)} - Abaixo do peso`;

    if(imc > 18.5 && imc < 24.9) return valorImc = `${imc.toFixed(1)} - Peso normal`;

    if(imc > 25 && imc < 29.9) return valorImc = `${imc.toFixed(1)} - Sobrepeso`;
    
    if(imc > 30 && imc < 34.9) return valorImc = `${imc.toFixed(1)} - Obesidade grau 1`;
    
    if(imc > 35 && imc < 39.9) return valorImc = `${imc.toFixed(1)} - Obesidade grau 2`;

    if(imc > 40) return valorImc = `${imc.toFixed(1)} - Obesidade grau 3`;
}