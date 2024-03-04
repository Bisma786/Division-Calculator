import inquirer from "inquirer";
const value1 = await inquirer.prompt({
    name: "val1",
    type: "number",
    message: "Enter first value",
});
const value2 = await inquirer.prompt({
    name: "val2",
    type: "number",
    message: "Enter second value",
});
let total = value1.val1 / value2.val2;
console.log(total);
