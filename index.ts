#! /usr/bin/env node 
 import inquirer from "inquirer"
 
 let myPin:number =1234
 let myBalance:number =10000
 let pinCode = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pincode:",
            type:"number"

        }
    ]
 )
if (pinCode.pin === myPin){
    let Operation=await inquirer.prompt(
        [
            {
            name:"operation",
            message:"what you want to do:",
            type:"list",
            choices:["Withdraw","Check balance"]
        }

    ]
    );
    if (Operation.operation === "Withdraw"){
        let WithdrawMethode= await inquirer.prompt(
            [
                {
                   name:"Method",
                   message:"Chose method of withdraw",
                   type:"list",
                   choices:["Fast cash","Enter amount"] 
                }
            ]
        )
        if (WithdrawMethode.Method==="Enter amount"){
            let amount_Aws=await inquirer.prompt(
                [
                    {
                        name:"amount",
                        message:"Who much many do you want to Withdraw:",
                        type:"number"
                    }
                ]
            );
                if(amount_Aws.amount >= myBalance){
                    console.log("You donot have insufficient balance");
                    

                }
                else{
                let remaingBalance=myBalance - amount_Aws.amount
                console.log(`Your remaing balance is: ${remaingBalance}` );
                }
            }else{
                let fastCash=await inquirer.prompt([
                {
                            name:"cash",
                            message:"how much you want to withdraw",
                            type:"list",
                            choices:["50","100","500","1000",]
                        }
                    ]);
                
                
                let remaingBalance= myBalance - fastCash.cash
                console.log(`Your remain balance is ${remaingBalance}`);
                
                
            }

            
    }else if (Operation.operation==="Check balance"){
        console.log(`Your balance is : ${myBalance}`);
        
    }

}else{
        console.log("Invalid Pincode");
    
}

