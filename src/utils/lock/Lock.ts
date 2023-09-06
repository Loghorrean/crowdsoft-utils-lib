import * as dayjs from "dayjs";

const defaultTimeout = 5000;
const defaultDelay = 50;
const storagePrefix = "lock:";

export class Lock {
    private delayTimeout?: number;

    constructor(private readonly key: string, private readonly storage: Storage) {}

    acquire(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            return this.waitAndSave(() => resolve(true), reject);
        });
    }

    release(): void {
        this.unlock();
    }

    private waitAndSave(resolve: () => void, reject: (reason: string) => void): void {
        try {
            if (this.isLocked()) {
                clearTimeout(this.delayTimeout);
                this.delayTimeout = window.setTimeout(() => this.waitAndSave(resolve, reject), defaultDelay);
            } else {
                this.lock();
                resolve();
            }
        } catch (error: any) {
            reject(error);
        }
    }

    private isLocked(): boolean {
        const isoDate = this.storage.getItem(storagePrefix + this.key);
        return (isoDate && dayjs().isAfter(dayjs(isoDate))) as boolean;
    }

    private lock(): void {
        this.storage.setItem(storagePrefix + this.key, dayjs().add(defaultTimeout, "milliseconds").toISOString());
    }

    private unlock(): void {
        this.storage.removeItem(storagePrefix + this.key);
    }
}
