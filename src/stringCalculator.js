class StringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/g;

    }
    Add(string){
        let sum =0;
        let msg = "";
        let nstr = string.match(this.regex1);
        try{
            if(string.includes("-")){
                for(let i = 0; i<nstr.length;i++){
                    msg = nstr.length;
                    if (nstr[i]<0){
                    console.log(nstr[i]);
                    }
                }
                throw("negatives not allowed")

            }
        }catch(e){return "error "+e ;}
         
        if (string == "" ){
            return 0;
        }
        else {
            for(let i = 0; i < nstr.length; i++){
                let num = parseInt(nstr[i]);
                if (num>1000){
                    continue
                }
                sum += num;
            } 

            return sum;
        }     
    }   
}

let calculator = new StringCalculator();
console.log(calculator.Add("1\n2,3,-106"));

module.exports = {
    StringCalculator
}