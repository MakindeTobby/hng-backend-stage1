function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPerfect(n) {
  if (n <= 1) return false; // Edge case
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

function isArmstrong(n) {
  const digits = n.toString().split("").map(Number);
  const power = digits.length;
  return digits.reduce((sum, d) => sum + Math.pow(d, power), 0) === n;
}

function digitSum(num) {
  n = Math.abs(num); // Ensure only positive integers are processed
  let sum = 0;

  while (n > 0) {
    sum += n % 10; // Extract last digit
    n = Math.floor(n / 10); // Remove last digit
  }
  return sum;
}

export const helpers = {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
};
