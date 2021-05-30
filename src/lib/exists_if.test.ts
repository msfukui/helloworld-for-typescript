import * as assert from "power-assert";

describe("Existence condition test in typescript", () => {
  describe("For string", () => {
    const existsIfString = (value: string | null | undefined): boolean => {
      if (value) {
        return true;
      } else {
        return false;
      }
    };

    it("Empty", () => {
      assert.equal(existsIfString(""), false);
    });

    it("Null", () => {
      assert.equal(existsIfString(null), false);
    });

    it("Undefined", () => {
      assert.equal(existsIfString(undefined), false);
    });

    it('Non-empty string, "0"', () => {
      assert.equal(existsIfString("0"), true);
    });
  });

  describe("For number", () => {
    const existsIfNumber = (value: number | null | undefined): boolean => {
      if (value) {
        return true;
      } else {
        return false;
      }
    };

    it("Zero", () => {
      assert.equal(existsIfNumber(0), false);
    });

    it("Non-empty number, 1", () => {
      assert.equal(existsIfNumber(1), true);
    });
  });
});
