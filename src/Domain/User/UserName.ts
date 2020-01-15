import {HttpException, HttpStatus} from '@nestjs/common';

export class UserName {
    protected value: string;

    constructor(value: string) {
        this.isNotEmpty(value);
        this.value = value;
    }

    protected isNotEmpty = (value: string) => {
        if (!value) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Its empty',
            }, 500);
        }
    };
}
