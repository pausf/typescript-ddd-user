import {TransportType, ExcludeDef} from 'nestjs-transport-eventbus';
import {Transport}                 from '@nestjs/microservices';

@TransportType(Transport.RMQ)
export class UserWasCreated {
    constructor(
        readonly message: string,
    ) {
    }
}
