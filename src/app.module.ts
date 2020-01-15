import {Module}             from '@nestjs/common';
import {AppService}         from './app.service';
import {UserPostController} from './UI/Http/user.post.controller';

@Module({
    imports: [],
    controllers: [UserPostController],
    providers: [AppService],
})
export class AppModule {
}
