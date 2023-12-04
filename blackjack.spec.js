
describe("01:10, 9 passed in to function should return false", () => {
    it("should test dealerShouldDraw", () => {
    const hand = [
        {displayVal: "Ten", val: 10, suit: "hearts"},
        {displayVal: "Nine", val: 9, suit: "hearts"},
    ]

    const result = dealerShouldDraw(hand);
    expect(result).toEqual(false);
    });
})

describe("02:Ace, 6 passed in to function should return true", () => {
    it("should test dealerShouldDraw", () => {
    const hand = [
        {displayVal: "Ace", val: 11, suit: "hearts"},
        {displayVal: "Six", val: 6, suit: "hearts"},
    ]

    const result = dealerShouldDraw(hand);
    expect(result).toEqual(true);
    });
})

describe("03:10, 6, Ace passed in to function should return false", () => {
    it("should test dealerShouldDraw", () => {
    const hand = [
        {displayVal: "Ten", val: 10, suit: "hearts"},
        {displayVal: "Six", val: 6, suit: "hearts"},
        {displayVal: "Ace", val: 11, suit: "hearts"},
    ]

    const result = dealerShouldDraw(hand);
    expect(result).toEqual(false);
    });
})

describe("03:2, 4, 2, 5 passed in should return true", () => {
    it("should test dealerShouldDraw", () => {
    const hand = [
        {displayVal: "Two", val: 2, suit: "hearts"},
        {displayVal: "Four", val: 4, suit: "hearts"},
        {displayVal: "Two", val: 2, suit: "hearts"},
        {displayVal: "Five", val: 5, suit: "hearts"},
    ]

    const result = dealerShouldDraw(hand);
    expect(result).toEqual(true);
    });
})