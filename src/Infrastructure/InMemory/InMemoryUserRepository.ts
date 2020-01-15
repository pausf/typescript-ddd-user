import {UserRepository} from '../../Domain/User/UserRepository';
import {User}           from '../../Domain/User/User';
import {injectable}     from 'inversify';
import {UserId}         from '../../Domain/User/UserId';
import {UserName}       from '../../Domain/User/UserName';
import {UserEmail}      from '../../Domain/User/UserEmail';

@injectable()
export class InMemoryUserRepository implements UserRepository {

    private users: User[] = [];

    public add(user: User): void {
        this.users.push(user);
    }

    public find(id: UserId): User {
        return this.users.find(user => (user.id.value() === id.value()));
    }

}
