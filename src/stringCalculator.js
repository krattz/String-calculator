class StringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/g;

    }
    Add(string){
        let sum =0;
        let nega="";
        let nstr = string.match(this.regex1);
        try{
            for(var i = 0;i<string.length;i++){
                
            if(string.includes("-")){
                let neg = string.indexOf("-")+1;
                if(neg.isNaN != true){
                  nega = parseInt(string.charAt(neg)*(-1));
                } 
                throw("negative " + nega+" not allowed");
            }
            }    
        }  
        catch(e){return "error "+e ;}
         
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
let calc = new StringCalculator();
console.log(calc.Add("1,2,56"));
module.exports = {
    StringCalculator
}