let firstNum=Number(prompt("enter first number"));
let operator=prompt("enter a case");
let secondNum=Number(prompt("enter second number"))
let result;
//using if else method
if(operator=="+") {
    result= firstNum + secondNum
}else if(operator=="-"){
    result =firstNum-secondNum;
}else if(operator=="*"){
    result=firstNum*secondNum;
}else if(operator=="/"){
    result=firstNum/secondNum
}else {
    result= "invalid operator"
}

// using switch opeartor
switch(operator){
    case "+" :
    result=firstNum+secondNum
    break;
    case "-":
    result =firstNum-secondNum;
break;
case "*":
result=firstNum*secondNum;
break;
case "/":
result=firstNum/lastNum;
break;
default:
result="incorrect operator"
break
}
console.log(result)