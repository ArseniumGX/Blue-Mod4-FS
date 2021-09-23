import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    getAll(): Message[];
    getById(params: any): Promise<Message>;
    create(messageDto: MessageDto): Message;
    update(params: any, messageDto: MessageDto): Message;
    delete(params: any): boolean;
}
