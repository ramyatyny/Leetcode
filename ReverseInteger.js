var reverse = function(num) {
    const reversedNumber = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );
    return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};
console.log(reverse(1234));