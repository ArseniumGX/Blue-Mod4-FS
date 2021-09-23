import { Message } from './Message';
import { MessageDto } from './MessageDto';
export declare class MessagesService {
    messages: Message[];
    findAll(): Message[];
    findById(id: number): Promise<Message>;
    create(messageDto: MessageDto): Message;
    update(id: number, messageDto: MessageDto): Message;
    delete(id: number): boolean;
}
