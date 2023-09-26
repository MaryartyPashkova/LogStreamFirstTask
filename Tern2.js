//Задание 1
let a = Math.floor(Math.random() * 100);
let a1 = a;
if (a <= 10) {
    a = a * 2;
}
if (a > 5) {
    a = (2 * a) + 1;
}
else {
    if (a < 3) {
        a = 1;
    }
    else {
        a = 2 * (a - 2);
    }
}
if (a > 4) {
    a = 5;
}
else {
    if (a % 2 == 0) {
        a = 6;
    }
    else {
        a = 7;
    }
}
console.log(a);

switch (true) {
    case a1 < 11:
        a1 = a1 * 2;
        break;
}
switch (true) {
    case a1 > 5:
        a1 = (2 * a1) + 1;
        break;
    case a1 <= 5:
        switch (true) {
            case a1 < 3:

                a1 = 1;
                break;
            case a1 <= 3:
                a1 = 2 * (a1 - 2);
                break;
        }
}
switch (true) {
    case a1 > 4:
        a1 = 5;
        break;
    case a1 <= 4:
        switch (true) {
            case a1 % 2 === 0:
                a1 = 6;
                break;
            case a1 % 2 !== 0:
                a1 = 7;
                break;
        }
}
console.log(a1);


// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
//Задание 2
function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let s = '';
    if (a > 10) {
        s += 'a is bigger than 10 ';
    }
    else {
        s += 'a is less than or equal to 10 ';
    }
    switch (true) {
        case a === 5:
            s += 'an example of a special case ';
            break;
        case a === 15:
            s += 'but a is not 15 ';
            break;
    }
    if (a > 5) {
        s += 'and a is greater than 5 ';
    }
    else {
        s += 'and a is less than or equal to 5 ';
    }
    if (a % 2 === 0) {
        s += ' and a is even ';
    }
    else {
        s += ' and a is odd ';
    }
    return (s);
}
console.log(manyChecks());