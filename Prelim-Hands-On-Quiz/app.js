const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;

// gross income
const grossIncome = multiply(multiply(ratePerHour, hoursPerDay), daysPerWeek);
console.log(`Gross Income: ${grossIncome}`);

// deductions
const tax = multiply(grossIncome, 0.10);
const sss = 1200;
const pagIbigFund = 300;
const philHealth = 400;
const totalDeductions = add(add(tax, sss), add(pagIbigFund, philHealth));
console.log(`Total Deductions: ${totalDeductions}`);

// net salary
const netSalary = subtract(grossIncome, totalDeductions);
console.log(`Net Salary: ${netSalary}`);