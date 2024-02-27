

function add(a,b){
    let sum = a + b;
    return sum;
}
function sub(a,b){
    let minus = a-b;
    return minus;
}
function mul(a,b){
    let multi = a*b;
    return multi;
}
function div(a,b){
    let division =a/b;
    division = division.toFixed(2);
    return division;
}

export {add, sub, mul, div};