import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

    public messages = [
        {
            id: 1,
            texto: "Primeira mensagem"
        }, 
        {
            id: 2,
            texto: "Segunda mensagem"
        }, 
        {
            id: 3,
            texto: "Terceira mensagem"
        },
        {
            id: 4,
            texto: "Quarta mensagem"
        },
    ];

    findAll(){
        return this.messages;
    }
    
    findById(id: number) {
        return this.messages.find(message => message.id === id);
    }
    
    create(message: {id: number, texto: string}) {
        this.messages.push(message);
    }
}
