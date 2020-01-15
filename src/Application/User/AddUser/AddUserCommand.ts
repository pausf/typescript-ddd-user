export class AddUserCommand {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _email: string;

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
