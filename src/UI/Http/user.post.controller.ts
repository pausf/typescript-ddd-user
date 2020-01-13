import {Controller, Post}      from '@nestjs/common';
import {AppService}            from '../../app.service';
import {AddUserCommand}        from '../../Application/User/AddUser/AddUserCommand';
import {AddUserCommandHandler} from '../../Application/User/AddUser/AddUserCommandHandler';

@Controller()
export class UserPostController {
    constructor(private readonly appService: AppService) {}

    @Post()
    post(): AddUserCommandHandler {
        const command = new AddUserCommand('a8d17737-fc5b-4a0d-87c4-e87ae31032fb', 'Pau', 'pau@email.com');
        return new AddUserCommandHandler(command);
    }
}
