import GeraCPF from './modules/GeraCPF';
import ValidaCPF from './modules/ValidaCPF';

import './assets/css/style.css';

(function () {

    function gerarCPF() {
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.gerarNovoCpf();
    }

    window.addEventListener("load", gerarCPF()); 

    const button = document.querySelector('.botao');
    
    button.addEventListener("click", gerarCPF())

})();


