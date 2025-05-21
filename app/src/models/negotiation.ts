export class Negotiation {
    constructor(
        private _date: Date,
        public readonly _quantity: number,
        public readonly _value: number
    ) {}

    public static createNegotiation(
        date: string,
        quantity: string,
        value: string
    ): Negotiation {
        return new Negotiation(
            new Date(date.replace(/-/g, ',')),
            Number(quantity),
            Number(value)
        );
    }

    get date(): Date {
        const date: Date = new Date(this._date.getTime());
        return date;
    }

    get total(): number {
        return this._quantity * this._value;
    }
}
