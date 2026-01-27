import {formatCurrency} from '../scripts/utils/money.js';

console.log('Running money formatting tests...');

if (formatCurrency(2090) === '20.90') {
    console.log('Test passed: formatCurrency(2090) === "$20.90"');
}else {
    console.error('Test failed: formatCurrency(2090) !== "$20.90"');
}

if (formatCurrency(500) === '5.00') {
    console.log('Test passed: formatCurrency(500) === "$5.00"');
}else {
    console.error('Test failed: formatCurrency(500) !== "$5.00"');
}

if (formatCurrency(0) === '0.00') {
    console.log('Test passed: formatCurrency(0) === "$0.00"');
}else {
    console.error('Test failed: formatCurrency(0) !== "$0.00"');
}
