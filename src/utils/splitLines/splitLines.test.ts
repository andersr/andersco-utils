import { splitLines } from "./splitLines";

describe("splitLines", () => {
  it("splits a string into an array of lines", () => {
    // ARRANGE
    const INPUT = "first line\nsecond line\nthird line";

    // ACT
    const lines = splitLines(INPUT);

    // ASSERT
    expect(lines[0]).toEqual("first line");
    expect(lines[1]).toEqual("second line");
    expect(lines[2]).toEqual("third line");
  });
});
