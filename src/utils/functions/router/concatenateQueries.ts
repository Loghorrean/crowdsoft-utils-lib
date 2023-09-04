//TODO: MAYBE ADD DEEP MERGE
import buildQuery from "./buildQuery";
import {getQueryObject} from "./getQueryObject";

export const concatenateQueries = (queryString: string, ...other: string[]): string => {
    return buildQuery(
        [queryString, ...other]
            .map(value => getQueryObject(value.startsWith("?") ? value : `?${value}`))
            .reduce((prev, cur) => {
                return { ...prev, ...cur };
            })
    );
};
