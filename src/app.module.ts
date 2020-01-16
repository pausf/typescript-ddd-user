import {Module}                  from '@nestjs/common';
import {AppService}              from './app.service';
import {UserPostController}      from './UI/Http/user.post.controller';
import {TransportEventBusModule} from 'nestjs-transport-eventbus';
import {RabbitPublisher}         from './Infrastructure/Publisher/RabbitMQ/RabbitPublisher';

@Module({
    imports: [],
    controllers: [UserPostController],
    providers: [AppService],
})

@Module({
    imports: [
        TransportEventBusModule.forRoot({
            publishers: [RabbitPublisher],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
