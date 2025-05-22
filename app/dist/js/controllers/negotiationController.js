var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from '../decorators/inspectDecorator.js';
import { performanceDecorator } from '../decorators/performanceDecorator.js';
import { weekDay } from '../enums/weekDay.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { NegotiationView } from '../views/negotiationView.js';
import { ToastView } from '../views/toastView.js';
export class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationView = new NegotiationView('#negotiationView');
        this._toastView = new ToastView('#toastView');
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
        this._negotiationView.update(this._negotiations);
    }
    createNegotiation() {
        const negotiation = Negotiation.createNegotiation(this._inputDate.value, this._inputQuantity.value, this._inputValue.value);
        if (!this.isWeekDay(negotiation.date)) {
            this._toastView.update(`Transações são permitidas apenas em dias úteis, o dia selecionado foi: ${weekDay[negotiation.date.getDay()]} `);
            return;
        }
        this.addNegotiation(negotiation);
        return negotiation;
    }
    isWeekDay(date) {
        return (date.getDay() > weekDay.SUNDAY && date.getDay() < weekDay.SATURDAY);
    }
    addNegotiation(negotiation) {
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._toastView.update(`Nova negociação realizada, no valor de R$:${negotiation.total}`);
        this.clearForm();
    }
    clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = '1';
        this._inputValue.value = '0';
        this._inputDate.focus();
    }
}
__decorate([
    inspect(),
    performanceDecorator(true)
], NegotiationController.prototype, "createNegotiation", null);
