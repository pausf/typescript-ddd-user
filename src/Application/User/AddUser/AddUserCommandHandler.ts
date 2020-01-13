import {AddUser}        from './AddUser';
import {AddUserCommand} from './AddUserCommand';
import {UserEmail}      from '../../../Domain/User/UserEmail';
import {UserId}      from '../../../Domain/User/UserId';
import {UserName}      from '../../../Domain/User/UserName';

export class AddUserCommandHandler {
    private adder: AddUser;

    constructor(adder: AddUserCommand) {
        this.adder = adder;
    }

    public command(addUserCommand: AddUserCommand) {
       return  AddUser.add(
          new UserId(addUserCommand.id),
          new UserName(addUserCommand.name),
          new UserEmail(addUserCommand.email),
        );
    }
}
