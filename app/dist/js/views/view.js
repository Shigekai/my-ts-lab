export class View {
    constructor(selector) {
        this.selector = selector;
    }
    update(model) {
        const element = document.querySelector(this.selector);
        if (element)
            element.innerHTML = this.template(model);
    }
}
