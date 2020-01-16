import {UserRepository}              from '../../../Domain/User/UserRepository';
import {UserId}                      from '../../../Domain/User/UserId';
import {UserName}                    from '../../../Domain/User/UserName';
import {UserEmail}                   from '../../../Domain/User/UserEmail';
import {User}                        from '../../../Domain/User/User';
import {injectable, inject}          from 'inversify';
import {TYPES}                       from '../../../types';
import {Inject}                      from '@nestjs/common';
import {TRANSPORT_EVENT_BUS_SERVICE} from 'nestjs-transport-eventbus';
import {IEventBus}                   from '@nestjs/cqrs';
import {UserWasCreated}              from '../../../Domain/User/UserWasCreated';

@injectable()
export class AddUser {

    private _userRepository: UserRepository;
    @Inject(TRANSPORT_EVENT_BUS_SERVICE) private readonly eventBus: IEventBus;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public add(userId: UserId, userName: UserName, userEmail: UserEmail): void {
        const user = new User(userId, userName, userEmail);
        this._userRepository.add(user);
        this.publisEvent();
    }

    public publisEvent(): void {
        this.eventBus.publish(new UserWasCreated('Pass some param'));
    }
}

export {UserRepository};
