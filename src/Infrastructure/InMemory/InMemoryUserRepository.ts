import {UserRepository} from '../../Domain/User/UserRepository';
import {User}           from '../../Domain/User/User';
import {injectable}     from 'inversify';

@injectable()
export class InMemoryUserRepository implements UserRepository {

    private  users: User[] = [];

    public add(user: User): void {
      this.users.push(user);
    }

}
