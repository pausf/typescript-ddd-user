import {Controller, Post}        from '@nestjs/common';
import {AppService}              from '../../app.service';
import {AddUserCommandHandler}   from '../../Application/User/AddUser/AddUserCommandHandler';
import {AddUserCommand}          from '../../Application/User/AddUser/AddUserCommand';
import {AddUser, UserRepository} from '../../Application/User/AddUser/AddUser';
import container                 from '../../Infrastructure/config/inversify.config';
import {TYPES}                   from '../../types';

@Controller()
export class UserPostController {
    constructor(private readonly appService: AppService) {}

    @Post()
    post() {
       let userRepository = container.get<UserRepository>(TYPES.UserRepository);
       const command = new AddUserCommand('a8d17737-fc5b-4a0d-87c4-e87ae31032fb', 'Pau', 'pau@email.com');
       const addUserCommandHandler = new AddUserCommandHandler(new AddUser(userRepository));
       return addUserCommandHandler.command(command);
    }
}
