module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  bracketsConfig.forEach(item => {
    brackets = brackets.concat(item);
  });
  let stack = [];

  str.split('').forEach(item => {
    if(!brackets.includes(item)) {
      return false;
    } else {
      // console.log(brackets[brackets.indexOf(item) - 1], brackets[brackets.length - 1])
      if(stack.length !== 0 && ((item==='|'||item==='7'||item==='8') ? brackets[brackets.indexOf(item)] : brackets[brackets.indexOf(item) - 1]) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  })
  return stack.length === 0
}
