
import * as uuid from 'uuid/v4';
import {isUUID} from '@nestjs/common/utils/is-uuid';
import {HttpException, HttpStatus} from '@nestjs/common';

export class UserId {

    id: string;

    constructor(id: string) {
        this.isValidUuid(id);
        this.isNotEmpty(id);
        this.id = id;
    }

    protected isValidUuid = (id: string) => {
        if (!isUUID(id)) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Its not valid Uuid',
            }, 500);
        }
    }

    protected isNotEmpty = (id: string) => {
        if ( !id) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Its empty',
            }, 500);
        }
    }

   public generate(): string{
        return uuid();
   }
}
