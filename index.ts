import inquirer from "inquirer";
//climport { first, from } from "rxjs";

//asking questions from users through inquirer

let asnwer= await inquirer.prompt([
    {message:"enter firstnumber",type:"number", name:"firstnumber" },
    {message:"enter firstnumber",type:"number", name:"secondnumber"},
    {message:"selectone operator to perform operations",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],},
    
]);

if(asnwer.operator === "Addition") 
    {console.log(asnwer.firstnumber + asnwer.secondnumber); }

else if(asnwer.operator === "Subtraction")
    {console.log(asnwer.firstnumber - asnwer.secondnumber);

    }   else if (asnwer.operator === "Multiplication")
    {console.log(asnwer.firstnumber * asnwer.secondnumber);}

else if(asnwer.operator  === "Division")
    {console.log(asnwer.firstnumber / asnwer.secondnumber);}

else{console.log("pleas select valid operator");}
