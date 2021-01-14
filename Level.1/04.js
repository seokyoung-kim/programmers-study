// 두 정수 사이의 합

function solution(a, b) {
  const minNum = Math.min(a, b); 
  const maxNum = Math.max(a, b);
  let arrays = [];
  
  for (let index = minNum; index <= maxNum; index++) {
    arrays.push(index);
  }
  
  const answer = arrays.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

console.log(solution(5, 5))