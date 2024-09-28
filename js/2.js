let fractionOne = {};
fractionOne.numerator = 5;
fractionOne.denomerator = 2;

let fractionTwo = {};
fractionTwo.numerator = 7;
fractionTwo.denomerator = 2;

let fractionAnswer = {};

function showFraction(obj) {
    return obj.numerator + "/" + obj.denomerator;
}

function commonDenom(obj1, obj2) {
    let temp_den = obj1.denomerator;
    obj1.numerator = obj1.numerator * obj2.denomerator;		
    obj1.denomerator = obj1.denomerator * obj2.denomerator;
    obj2.numerator = obj2.numerator * temp_den;
    obj2.denomerator = obj2.denomerator * temp_den;
}

function sum(obj1, obj2) {
    let tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {
        commonDenom(obj1, obj2);
    }

    tempFract.numerator = obj1.numerator + obj2.numerator;
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}

function minus(obj1, obj2) {  
    let tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {
        commonDenom(obj1, obj2);
    }

    tempFract.numerator = obj1.numerator - obj2.numerator;
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}

function multiply(obj1, obj2) {  
    let tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.numerator;
    tempFract.denomerator = obj1.denomerator * obj2.denomerator;

    tempFract = reduction(tempFract);

    return tempFract;
}

function divide(obj1, obj2) {  
    let tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.denomerator;
    tempFract.denomerator = obj1.denomerator * obj2.numerator;

    tempFract = reduction(tempFract);

    return tempFract;
}

function reduction(obj) {
    let nod = 1;
    let tempFract = {
        numerator : obj.numerator,
        denomerator : obj.denomerator
    };
    for (let i = tempFract.numerator; i > 1; i--) {
        if ((tempFract.numerator % i == 0) &&
            (tempFract.denomerator % i == 0)) {
            tempFract.numerator /= i;
            tempFract.denomerator /= i;
        }
    }

    return tempFract;
}



function showCompute(sign) {

    switch (sign) {
        case '+':
            fractionAnswer = sum(fractionOne, fractionTwo);
            break;
        case '-':
            fractionAnswer = minus(fractionOne, fractionTwo);
            break;
        case '*':
            fractionAnswer = multiply(fractionOne, fractionTwo);
            break;
        case '/':
            fractionAnswer = divide(fractionOne, fractionTwo);
            break;
        case '=':
            fractionAnswer = reduction(fractionOne);
            showReductionResult(fractionOne, fractionAnswer);
            return;
    
        default:
            alert("[error] недопустимый знак вычисения!")
            return;
    }
    
    alert(
        showFraction(fractionOne) 
        + " " + sign + " " 
        + showFraction(fractionTwo) 
        + " = " 
        + showFraction(fractionAnswer)
        );
}

function showReductionResult(obj1, objAnswer) {
    alert(
        showFraction(obj1) 
        + " = " 
        + showFraction(objAnswer)
        );
}