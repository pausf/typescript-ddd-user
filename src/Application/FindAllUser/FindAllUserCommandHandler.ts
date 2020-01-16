import {User}        from '../../Domain/User/User';
import {FindAllUser} from './FindAllUser';

export class FindAllUserCommandHandler{

    private findAllUser: FindAllUser;

    constructor(findAllUser: FindAllUser) {
        this.findAllUser = findAllUser;
    }

    public handle(): User[] {
        return this.findAllUser.findAll();
    }
}
