
function Convert_Function(fun){
    let split_data=fun.split(" ");
    
    if(fun.includes("function")){
        let result= `let ${split_data[1]} = ${split_data[2]} => ${split_data[3]}`;
        //let result="let abc = (arg1, arg2) => {some code}";
        return result;
    }
    else if(fun .includes("=>")){
        let result=`function ${split_data[1]}${split_data[3]} ${split_data[5]}`;
        return result;
    }
    else{
        result="Check again";
    }
}

let normal_function = "function abc (arg1,arg2) {code}";
let arrow_function ="let abc = (arg1,arg2) => {code}";

console.log("The function: " + normal_function + "is converted to: " + Convert_Function(normal_function) + "\n\n");
console.log("The function: " + arrow_function + "is converted to: " + Convert_Function(arrow_function) + "\n\n");