import {UserId}        from '../../../Domain/User/UserId';
import {FindUser}      from './FindUser';
import {FindUserQuery} from './FindUserQuery';
import {User}          from '../../../Domain/User/User';

export class FindUserQueryHandler {

    private findUser: FindUser;

    constructor(findUser: FindUser) {
        this.findUser = findUser;
    }

     public handle(query: FindUserQuery): User {
        return  this.findUser.find(new UserId(query.id));
    }
}
