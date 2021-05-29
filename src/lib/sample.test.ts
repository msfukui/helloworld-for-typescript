import * as assert from "power-assert";
import { main } from "./sample";

describe("A sample test to use power-assert, jest and typescript", () => {
  it("Hello", () => {
    main();
    assert.deepEqual({ greeting: "Hello" }, { greeting: "Hello" });
  });
});
