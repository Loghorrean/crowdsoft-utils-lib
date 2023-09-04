import { MetaConfigType } from "./MetaConfigType";

export class MetaProvider {
    constructor(private readonly metaConfig: MetaConfigType) {}

    public provideTitle(title: string, needPostfix = true) {
        if (!needPostfix) {
            return title;
        }
        return `${title} | ${this.metaConfig.baseTitle}`;
    }
}
