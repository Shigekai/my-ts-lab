import { inspect } from '../decorators/inspectDecorator.js';
import { performanceDecorator } from '../decorators/performanceDecorator.js';
import { weekDay } from '../enums/weekDay.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { NegotiationView } from '../views/negotiationView.js';
import { ToastView } from '../views/toastView.js';

export class NegotiationController {
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView('#negotiationView');
    private _toastView = new ToastView('#toastView');

    constructor() {
        this._inputDate = document.querySelector('#date') as HTMLInputElement;
        this._inputQuantity = document.querySelector(
            '#quantity'
        ) as HTMLInputElement;
        this._inputValue = document.querySelector('#value') as HTMLInputElement;
        this._negotiationView.update(this._negotiations);
    }

    @inspect()
    @performanceDecorator(true)
    public createNegotiation(): Negotiation | undefined {
        const negotiation = Negotiation.createNegotiation(
            this._inputDate.value,
            this._inputQuantity.value,
            this._inputValue.value
        );
        if (!this.isWeekDay(negotiation.date)) {
            this._toastView.update(
                `Transações são permitidas apenas em dias úteis, o dia selecionado foi: ${
                    weekDay[negotiation.date.getDay()]
                } `
            );
            return;
        }
        this.addNegotiation(negotiation);
        return negotiation;
    }

    private isWeekDay(date: Date): boolean {
        return (
            date.getDay() > weekDay.SUNDAY && date.getDay() < weekDay.SATURDAY
        );
    }

    private addNegotiation(negotiation: Negotiation): void {
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._toastView.update(
            `Nova negociação realizada, no valor de R$:${negotiation.total}`
        );
        this.clearForm();
    }

    private clearForm(): void {
        this._inputDate.value = '';
        this._inputQuantity.value = '1';
        this._inputValue.value = '0';
        this._inputDate.focus();
    }
}
