import {Injectable}                     from '@nestjs/common';
import {Client, ClientProxy, Transport} from '@nestjs/microservices';
import {Publisher}                      from 'nestjs-transport-eventbus';

@Injectable()
@Publisher(Transport.RMQ)
export class RabbitPublisher {
    @Client({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://rabbitmq:guest@guest:5672'],
            queue: 'event_service_queue',
            queueOptions: {
                durable: true,
            },
        },
    })
    client: ClientProxy;
}
