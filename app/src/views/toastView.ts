import { View } from "./view.js";

export class ToastView extends View<string> {
   protected template(model: string): string {
    return `
            <p class="alert alert-info">
                ${model}
            </p>
        `;
  }
}

// o único método abstrato é template, que precisa ser feito
// pelas classes herdeiras, os outros serão herdados automaticamente
// e prontos para uso