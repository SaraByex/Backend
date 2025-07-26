//syntax
//process.stout.write() - give an output to console --- similar to console.log
//process.stdin.on - receive input

//process.stdout.write("Hello everybody");

//class task : wit interview
// const interviewQuestions = [
//     "What is your name? ", "Tell me about yourself: ", "Why do you want to join this company? "
// ]
// let index = 0
// process.stdout.write(interviewQuestions[index])

// //to receive responses - takes event and call back function
// process.stdin.on("data", (studentdata)=>{
//     console.log(`Your answer is ${studentdata}`);
//     process.exit();

// })

////create a calculator system with I/O - addition and subtraction
const prompts = ["Input number 1: ", "Input number 2: "];
let inputs = [];
let index = 0;

process.stdout.write(prompts[index]);

process.stdin.on("data", (data) => {
    inputs.push(Number(data.toString().trim()));
    index++;

    if (index < prompts.length) {
        process.stdout.write(prompts[index]);
    } else {
        const [num1, num2] = inputs;
        console.log(`\nAddition: ${num1} + ${num2} = ${num1 + num2}`);
        console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
        process.exit();
    }
});