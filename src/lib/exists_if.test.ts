import * as assert from "power-assert";

describe("Existence condition test in typescript", () => {
  const existsIf = (value: string | null | undefined): boolean => {
    if (value) {
      return true;
    } else {
      return false;
    }
  };

  it("Empty", () => {
    assert.equal(existsIf(""), false);
  });

  it("Null", () => {
    assert.equal(existsIf(null), false);
  });

  it("Undefined", () => {
    assert.equal(existsIf(undefined), false);
  });

  it('Non-Empty String, "0"', () => {
    assert.equal(existsIf("0"), true);
  });
});
