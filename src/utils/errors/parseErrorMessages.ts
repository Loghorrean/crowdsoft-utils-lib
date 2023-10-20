import { isValueEmpty } from "../functions";
import { ValidationErrors } from "../types";

type FormErrors = {
    [key: string]: ValidationErrors | FormErrors | undefined;
};

export const parseErrorMessages = (errors: FormErrors): Array<string> => {
    const messages: Array<string> = [];
    for (const error of Object.values(errors)) {
        if (isValueEmpty(error)) {
            continue;
        }
        if (Array.isArray(error)) {
            messages.push(...error);
            continue;
        }
        messages.push(...parseErrorMessages(error));
    }
    return messages;
};
