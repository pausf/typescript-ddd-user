
export class AddUserCommand {
    private _id: string;
    private _name: string;
    private _email: string;

    constructor(id: string, name: string, email: string) {
        this._id    = id;
        this._name  = name;
        this._email = email;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }
}
