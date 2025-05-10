var globalVar = "global viriable";
let globalLet = "global";
const globalconst = "global";

{
    var blockVar = "Block vaariable scope ";
    let Blocklet = "also Block-scope";
    const blockconst = "also Block scope ";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalconst);

//block scope
// console.log(blockVar);
// console.log(Blocklet);

function show(){
    var functionvar = "functionvar";
    let functionlet = "functionlet";
    const functionconst = "functionconst";
}

show();

console.log(functionvar);
console.log(functionlet);
console.log(functionconst);