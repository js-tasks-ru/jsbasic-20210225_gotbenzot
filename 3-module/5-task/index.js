function getMinMax(str) {
  const numbersOnly = str
  .split(',').join(' ').split(' ')
  .filter(item => Number(item));
  // let result = {
  //   min: Math.min(...numbersOnly),
  //   max: Math.max(...numbersOnly),
  // }
  //return result;
  return {
       min: Math.min(...numbersOnly),
       max: Math.max(...numbersOnly),
     }
}
