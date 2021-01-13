// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

function solution(n) {
  const number = n;

  const arrays = Array(15).fill(0).map((v, i) => i + 1);
  let answer = 0;

  for (let first = 0; first < number; first++) {
    let count = 0;
    for (let second = 0; second < number; second++) {
      let tempArrays = arrays.slice(first, second + 1)
      count = tempArrays.reduce((acc, cur) => {
        acc + cur
      }, 0);
    }
    if(count === 15) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(15))