import GeraCPF from './modules/geraCPF'
import './assets/css/style.css'


(function () {
    const gera = new GeraCPF;
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();


})();