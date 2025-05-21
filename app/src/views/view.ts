export abstract class View<T> {
  constructor(protected selector: string) {}
  //atributos protected podem ser acessados apenas por
  //classes herdeiras, mas não por instâncias

  protected abstract template(model: T): string;

   public update(model: T): void {
    const element = document.querySelector(this.selector);
    if(element) element.innerHTML = this.template(model);
  }
}
