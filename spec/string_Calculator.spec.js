const {StringCalculator} = require("../src/string_Calculator.js");
let tst = new StringCalculator;
describe('function that adds numbers from a string',function(){
    it('return 0 if string is empty',function(){
        expect(tst.Add("")).toBe(0);
    });
    it('return sum of multiple numbers',function(){
        expect(tst.Add("1,2")).toBe(3);
    });
    it('return sum of multiple numbers seperated by special characters',function(){
        expect(tst.Add("1,2\n3")).toBe(6);
    });
    it('Negative number will throw an exception',()=>{
        expect(()=>{
            tst.Add("-1,1")
        }).toThrowError('Expected function to throw an Error.');
    });
});