class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y !== 0) {
            return x / y;} 
        else {
            return 'Cannot work';
        }
    }

    squareRoot(x) {
        if (x >= 0) {
            return Math.sqrt(x);
        } 
        else {
            return 'Square root of a negative number is undefined';
        }
    }

    absoluteValue(x) {
        if (x >= 0) {
            return Math.abs(x);
        }
        else {
            return 'Absolute of a negative number is undefined';
        }
    }

    ceilingValue(x) {
        if (x >= 0) {
            return Math.ceil(x);
        }
        else {
            return 'Ceiling value of a negative number is undefined';
        }
    }

    floorValue(x) {
        if (x >= 0) {
            return Math.floor(x);
        }
        else {
            return 'Floor value of a negative number is undefined';
        }
    }

    roundValue(x) {
        if (x >= 0) {
            return Math.round(x);
        }
        else {
            return 'Round value of a negative number is undefined';
        }
    }

    cosine(x) {
        if (x >= 0) {
            return Math.cos(x);
        }
        else {
            return 'Cos of a negative number is undefined';
        }
    }
}



console.log(`Addition: ${calculator.add(num1, num2)}`);
console.log(`Subtraction: ${calculator.subtract(num1, num2)}`);
console.log(`Multiplication: ${calculator.multiply(num1, num2)}`);
console.log(`Division: ${calculator.divide(num1, num2)}`);
console.log(`Square Root: ${calculator.squareRoot(num1)}`);
console.log(`Ceiling Value: ${calculator.ceilingValue(num1)}`);
console.log(`Floor Value: ${calculator.floorValue(num1)}`);
console.log(`Round Number: ${calculator.roundValue(num1)}`);
console.log(`Cosine: ${calculator.cosine(num1)}`);
