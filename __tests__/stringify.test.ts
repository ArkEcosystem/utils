import "jest-extended";

import { stringify } from "../src";

describe("#stringify", () => {
    it("should return the given value as JSON", () => {
        const o = { b: 1, a: 0 };
        // @ts-ignore
        o.o = o;

        expect(stringify(o)).toEqual('{"b":1,"a":0,"o":"[Circular]"}');
    });
});
