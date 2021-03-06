// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

const solution1 = phone_number => phone_number.split('').map((v, i) => i < phone_number.length - 4 ? '*' : v).join('');

console.log(solution1('01033334444'));

// 실패율

const solution2 = (N, stage) => {
  let userAtStage = [];

  for (let i = 1; i <= N; i++) {
    userAtStage = [...userAtStage, {
      stage: i,
      fail: stage.filter(v => v === i).length / stage.filter(v => v >= i).length
    }];
  };

  userAtStage.sort((a, b) => b.fail - a.fail);

  return userAtStage.map(v => v.stage);
};

console.log(solution2(5, [2, 1, 2, 6, 2, 4, 3, 3]));