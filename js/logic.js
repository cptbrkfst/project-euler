function q1Calc() {
    var num = parseInt(document.getElementById('q1').value);
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }
    document.getElementById('a1').value = sum;
}

function q2Calc() {
    var num = parseInt(document.getElementById('q2').value);
    var a = 0;
    var b = 1;
    var c = 1;
    var sum = 0;
    while (c <= num) {
        c = a + b;
        a = b;
        b = c;
        if (c % 2 === 0)
            sum = sum + c;
    }
    document.getElementById('a2').value = sum;
}

function q3Calc() {
    var num = parseInt(document.getElementById('q3').value);

    function isPrime(num) {
        for (var i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    function firstNPrimes(num) { 
        if (isPrime(num)) {
            return num;
        }
        for (var i = Math.ceil(num / 2); i > 1; i--) {
            if (((num % i) == 0) && (isPrime(i))) {
                return i;
            }
        }
    }
    document.getElementById('a3').value = firstNPrimes(num);
}