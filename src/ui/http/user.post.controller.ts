import { Controller, Post } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller()
export class UserPostController {
    constructor(private readonly appService: AppService) {}

    @Post()
    post(): string {
        return this.appService.getHello();
    }
}
