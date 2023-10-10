function generateFibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const termsInput = document.getElementById('terms');
        const n = parseInt(termsInput.value);

        if (n <= 0) {
            resultDiv.innerHTML = "<p>Please enter a positive integer.</p>";
        } else {
            const fibonacciSeries = generateFibonacci(n);

            let resultHTML = `<p>Fibonacci Series with ${n} terms:</p><ul>`;
            fibonacciSeries.forEach(number => {
                resultHTML += `<li>${number}</li>`;
            });
            resultHTML += `</ul>`;
            resultDiv.innerHTML = resultHTML;
        }
    });
});
