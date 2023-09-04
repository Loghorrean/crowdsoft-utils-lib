import { Lock } from "./Lock";

export class LockFactory {
    constructor(private readonly storage: Storage) {}

    createLock(key: string): Lock {
        return new Lock(key, this.storage);
    }
}
