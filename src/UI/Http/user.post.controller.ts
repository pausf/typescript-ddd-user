import {Controller, Post}      from '@nestjs/common';
import {AppService}            from '../../app.service';
import {AddUserCommandHandler} from '../../Application/User/AddUser/AddUserCommandHandler';
import {AddUserCommand}        from '../../Application/User/AddUser/AddUserCommand';
import {AddUser}        from '../../Application/User/AddUser/AddUser';

@Controller()
export class UserPostController {
    constructor(private readonly appService: AppService) {}

    @Post()
    post() {
       const command = new AddUserCommand('a8d17737-fc5b-4a0d-87c4-e87ae31032fb', 'Pau', 'pau@email.com');
       const addUserCommandHandler = new AddUserCommandHandler(new AddUser());
       return addUserCommandHandler.command(command);
    }
}
