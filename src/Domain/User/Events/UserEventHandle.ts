import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import {UserWasCreated}                 from '../UserWasCreated';

@EventsHandler(UserWasCreated)
export class UserEventHandle implements IEventHandler<UserWasCreated> {
    handle(event: UserWasCreated) {
        console.debug('handling event from RabbitEventHandler:\n', event);
    }
}
