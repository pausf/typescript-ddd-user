import {UserId} from './UserId';

export class User{
    private _id: UserId;
    private _name: UserName;
    private _email: UserEmail;

    constructor(id: UserId, name: UserName, email: UserEmail) {
        this._id    = id;
        this._name  = name;
        this._email = email;
    }
}
