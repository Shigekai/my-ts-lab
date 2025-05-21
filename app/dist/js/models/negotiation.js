export class Negotiation {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    static createNegotiation(date, quantity, value) {
        return new Negotiation(new Date(date.replace(/-/g, ',')), Number(quantity), Number(value));
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get total() {
        return this._quantity * this._value;
    }
}
