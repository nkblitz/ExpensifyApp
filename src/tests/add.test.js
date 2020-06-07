const add = (a, b) => a + b;

test("Add test", () => {
    const result = add(4, 3);
    expect(result).toBe(7);
});