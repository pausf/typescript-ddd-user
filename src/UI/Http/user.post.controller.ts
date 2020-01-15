import {Controller, Get, Param, Post} from '@nestjs/common';
import {AppService}                   from '../../app.service';
import {AddUserCommandHandler}        from '../../Application/User/AddUser/AddUserCommandHandler';
import {AddUserCommand}               from '../../Application/User/AddUser/AddUserCommand';
import {AddUser, UserRepository} from '../../Application/User/AddUser/AddUser';
import container                 from '../../Infrastructure/config/inversify.config';
import {TYPES}                   from '../../types';
import {FindUserQuery}           from '../../Application/User/FindUser/FindUserQuery';
import {FindUserQueryHandler}    from '../../Application/User/FindUser/FindUserQueryHandler';
import {FindUser}                from '../../Application/User/FindUser/FindUser';
import {User}                    from '../../Domain/User/User';

@Controller('user')
export class UserPostController {

    private userRepository;

    constructor(private readonly appService: AppService) {
        this.userRepository = container.get<UserRepository>(TYPES.UserRepository);
    }

    @Post()
    post() {

        const command               = new AddUserCommand('a8d17737-fc5b-4a0d-87c4-e87ae31032fb', 'Pau', 'pau@email.com');
        const addUserCommandHandler = new AddUserCommandHandler(new AddUser(this.userRepository));
        addUserCommandHandler.command(command);

        return `User was created with id: ${command.id}`;
    }

    @Get(':id')
    getUser(@Param('id') id): User {

        const query                = new FindUserQuery(id);
        const findUserQueryHandler = new FindUserQueryHandler(new FindUser(this.userRepository));
        return findUserQueryHandler.handle(query);
    }
}
