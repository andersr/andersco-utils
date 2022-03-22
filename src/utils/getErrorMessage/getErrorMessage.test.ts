import { getErrorMessage } from "./getErrorMessage";

describe("getErrorMessage", () => {
  it("returns the expected error message", () => {
    const errorMessage = "this is a string";
    function throwString() {
      try {
        throw new Error("this is a string");
      } catch (error) {
        return getErrorMessage(error);
      }
    }

    expect(throwString()).toEqual(errorMessage);
  });
});
