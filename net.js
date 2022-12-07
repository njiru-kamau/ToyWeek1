// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 



var basicSalary = prompt('Enter basic salary');
var diductions = prompt('Enter diductions');
var Payee = (basicSalary - diductions);
var NHIF = (basicSalary - diductions);
var NSSF = (basicSalary - diductions);
var grossSalary = basicSalary - diductions;
var netSalary = grossSalary - payee - NHIF - NSSF;
console.log('Payee: ' + payee);
console.log('NHIF: ' + NHIF);
console.log('NSSF: ' + NSSF);
console.log('Gross Salary: ' + grossSalary);
console.log('Net Salary: ' + netSalary);