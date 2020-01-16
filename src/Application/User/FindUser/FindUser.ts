import {UserRepository} from '../../../Domain/User/UserRepository';
import {inject}         from 'inversify';
import {TYPES}          from '../../../types';
import {UserId}         from '../../../Domain/User/UserId';
import {User}           from '../../../Domain/User/User';

export class FindUser {

    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public find(id: UserId): User {
        return this.userRepository.find(id);
    }
}
export {UserRepository};
