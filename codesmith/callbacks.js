//callbacks and higher order functions online meetup notes 1/14/2020//

//Global execution context
//Memory (Variable Environment)
//Thread of execution
//call-stack
//first stack frame is global execution context


let num = 3;
//declaring function in global execution context and storing definition in variable environment//
function multiplyBy2(inputNumber){
  const result = inputNumber * 2;
  return result;
}

//function definition is not analyzed by javascript until the function is invoked in global execution context.

const output = multiplyBy2(num);
//function level execution context consists of thread of execution and local memory// 
//once Javascript interprets the parameters set by the function multiplyBy2, the output result is returned, popped off of the call stack and collected in garbage collection.
//return results are returned to global context.
const newOutput = multiplyBy2(10);

//being able to pass in a function definition as an argument to the invocation of another function;
