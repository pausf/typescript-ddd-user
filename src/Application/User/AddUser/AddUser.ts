import {UserRepository}         from '../../../Domain/User/UserRepository';
import {UserId}                 from '../../../Domain/User/UserId';
import {UserName}               from '../../../Domain/User/UserName';
import {UserEmail}              from '../../../Domain/User/UserEmail';
import {User}                   from '../../../Domain/User/User';
import {InMemoryUserRepository} from '../../../Infrastructure/InMemory/InMemoryUserRepository';
import { injectable, inject }   from 'inversify'
import {TYPES}                  from '../../../types';

export class AddUser {
    @inject(TYPES.UserRepository) private userRepository : InMemoryUserRepository;

    public add(userId: UserId, userName: UserName , userEmail: UserEmail): string {
        const user = new User(userId, userName, userEmail);
        this.userRepository.add(user);

        return 'ddd';
    }
}
