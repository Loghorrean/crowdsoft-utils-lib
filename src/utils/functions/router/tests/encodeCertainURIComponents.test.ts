import { encodeCertainURIComponents } from "../encodeCertainURIComponents";

describe("Testing encoding certain uri strings", () => {
    test("Test basic string", () => {
        const value = encodeCertainURIComponents("field[]=1&field[]=2", ["[", "]"]);
        expect(value).toBe("field%5B%5D=1&field%5B%5D=2");
    });
});
