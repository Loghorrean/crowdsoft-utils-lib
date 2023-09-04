import { getQueryObject } from "@/src/utils";
import buildQuery from "@/src/utils/functions/router/buildQuery";

//TODO: MAYBE ADD DEEP MERGE
export const concatenateQueries = (queryString: string, ...other: string[]): string => {
    return buildQuery(
        [queryString, ...other]
            .map(value => getQueryObject(value.startsWith("?") ? value : `?${value}`))
            .reduce((prev, cur) => {
                return { ...prev, ...cur };
            })
    );
};
