import camelCase from "lodash/camelCase";
import { camelCase as fastCamel } from "../src";

test("changes casing the same way as lodash does", () => {
    expect(fastCamel("Foo Bar")).toEqual("fooBar");
    expect(fastCamel("--foo-bar--")).toEqual("fooBar");
    expect(fastCamel("__FOO_BAR__")).toEqual("fooBar");

    expect(camelCase("Foo Bar")).toEqual("fooBar");
    expect(camelCase("--foo-bar--")).toEqual("fooBar");
    expect(camelCase("__FOO_BAR__")).toEqual("fooBar");
});
