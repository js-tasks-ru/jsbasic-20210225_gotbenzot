function factorial(n) {
  let result = n;
  if(n == 0) {
      return 1;
  }
  for(let i = n - 1; i > 1; --i) {
    result = result * i;
  }
  return result;
}