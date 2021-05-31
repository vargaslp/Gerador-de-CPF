//import {nome as name, soma, Pessoa} from './modulo1'
//import * as MeuModulo from './modulo1'
import GeraCPF from './modules/geraCPF'
import './assets/css/style.css'


(function () {
    const gera = new GeraCPF;
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();


})();