/**
 *By xennia316
 6th March 2022
 */
const sum = (...args) => {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}