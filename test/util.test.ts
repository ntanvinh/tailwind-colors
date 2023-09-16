import { twHex } from "../lib";

describe('twHex', () => {
  test("success slate-900", function () {
    const hex = twHex("slate-900");
    expect(hex).toEqual("#0f172a");
  });
  test("success white", function () {
    const hex = twHex("white");
    expect(hex).toEqual("#ffffff");
  });
  test("success black", function () {
    const hex = twHex("black");
    expect(hex).toEqual("#000000");
  });
  test("transparent to #ffffff", function () {
    const hex = twHex("transparent");
    expect(hex).toEqual("#ffffff");
  });
});
