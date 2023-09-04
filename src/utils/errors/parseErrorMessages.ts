import {isNotEmpty} from "../functions";

type FormErrors = {
    [key: string]: Array<string> | undefined;
};

export const parseErrorMessages = (errors: FormErrors): Array<string> => {
    const messages: Array<string> = [];
    for (const error of Object.values(errors)) {
        isNotEmpty(error) && messages.push(...error);
    }
    return messages;
};
