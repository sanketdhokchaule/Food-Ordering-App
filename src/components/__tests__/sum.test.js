import Sum from "../Sum";

test("it should return a sum of two numbers", ()=>{

    const result = Sum(4,4);

    expect(result).toBe(8);
})