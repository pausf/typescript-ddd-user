import {UserRepository}     from '../../../Domain/User/UserRepository';
import {UserId}             from '../../../Domain/User/UserId';
import {UserName}           from '../../../Domain/User/UserName';
import {UserEmail}          from '../../../Domain/User/UserEmail';
import {User}               from '../../../Domain/User/User';
import {injectable, inject} from 'inversify';
import {TYPES}              from '../../../types';

@injectable()
export class AddUser {

    private _userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public add(userId: UserId, userName: UserName, userEmail: UserEmail): void {
        const user = new User(userId, userName, userEmail);
        this._userRepository.add(user);
    }
}

export {UserRepository};
