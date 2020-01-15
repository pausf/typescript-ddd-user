import {User}   from './User';
import {UserId} from './UserId';

export interface UserRepository {
    add(user: User);
    find(id: UserId);
}
