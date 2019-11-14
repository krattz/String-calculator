class StringCalculator{
    constructor() {
        this.regex1 = /[, \n\ ]/;
    }
    Add(string){
        let sum =0;
        let nstr = string.split(this.regex1);
        if (string == "" ){
            return 0;
        }
        else {
            for(let i = 0; i < nstr.length; i++){
                let num = parseInt(nstr[i]);
                sum += num;
            }           
            return sum;
        }   
    }   
}

// let calculator = new StringCalculator();
// console.log(calculator.Add("1\n2,3"));

module.exports = {
    StringCalculator
}