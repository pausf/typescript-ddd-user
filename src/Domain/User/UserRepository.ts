import {User} from '../../../dist/Domain/User/User';

export interface UserRepository {
    add(user: User);
}
