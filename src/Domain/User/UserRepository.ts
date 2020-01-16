import {User}   from './User';
import {UserId} from './UserId';

export interface UserRepository {
    add(user: User): void;
    find(id: UserId): User;
    findAll(): User[];
}
