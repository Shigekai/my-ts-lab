import { NegotiationController } from './controllers/negotiationController.js';

const controller = new NegotiationController();

const form = document.querySelector('.form');
//null checking
form &&
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.createNegotiation();
    });
