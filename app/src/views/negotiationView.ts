import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationView extends View<Negotiations> {
  protected template(negotiations: Negotiations): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <td>
                        Data
                    </td>
                    <td>
                        Quantidade
                    </td>
                    <td>
                        Valor Unitário
                    </td>
                    <td>
                        Total
                    </td>
                </tr>
            </thead>
            <tbody>
                ${negotiations
                  .list()
                  .map((negotiation) => {
                    return `
                        <tr>
                            <td>
                                ${new Intl.DateTimeFormat().format(
                                  negotiation.date
                                )}
                            </td>
                            <td>
                                ${negotiation._quantity}
                            </td>
                            <td>
                                ${negotiation._value}
                            </td>
                            <td>
                                ${negotiation.total}
                            </td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }
}
