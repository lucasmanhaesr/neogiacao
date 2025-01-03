import { View } from "./view.js";

export class MensagemView extends View<string>{  //Especificando a string como tipo que será implementado na função "update(parametro: string)"

    //String com o HTML puro e a interpolação da variavel
    protected template(mensagem: string): string{
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }

    //Função que passa a mensagem como parametro e joga para a template. 
    // Usando como parametro o tipo especifico string
    public update(mensagem: string): void{
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
    }

}