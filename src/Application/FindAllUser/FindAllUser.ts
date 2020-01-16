import {UserRepository} from '../../Domain/User/UserRepository';

export class FindAllUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public findAll() {
        return this.userRepository.findAll();
    }
}
export {UserRepository};
