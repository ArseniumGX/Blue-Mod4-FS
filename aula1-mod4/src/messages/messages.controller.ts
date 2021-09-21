import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {} // CONSTRUTOR ONDE FICA EXPLÍCITA A RELAÇÃO

    @Get()
    getAll(){
        return this.messagesService.findAll();
    }

    @Get(':id')
    getById(@Param() params){
        return this.messagesService.findById(+params.id);
    }

    @Post()
    create(@Body() body: any){
        return this.messagesService.create(body);
    }

}
