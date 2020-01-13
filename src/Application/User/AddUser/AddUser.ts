import {UserRepository} from '../../../Domain/User/UserRepository';
import {UserId}         from '../../../Domain/User/UserId';
import {UserName}       from '../../../Domain/User/UserName';
import {UserEmail}      from '../../../Domain/User/UserEmail';
import {User}           from '../../../Domain/User/User';

export class AddUser {
    /*private userRepository: UserRepository;

    public constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }*/

    public add(userId: UserId, userName: UserName , userEmail: UserEmail): string {
        const user = new User(userId, userName, userEmail);
        const userArray = {
            0: 'apple',
            1: 'orange',
            2: 'pear',
        };

        return 'hola';
    }
}
