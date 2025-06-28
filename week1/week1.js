//변수,상수 작성 과제

// 1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
const userName = "이형민";

// 2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const absoluteZero = "-273.15°C";

// 3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
const isLoggedOn = true;

// 4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 37;

// 5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = 39_000;

// 6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const backgroundColor = "#ffffff";

// 7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let userReplyCount = 12;

// 8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let currentPage = 3;

// 9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let memberGrade = "VIP";

// 10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isButtonClicked = true;

//함수 작성 과제

// 1. 인사말 메시지 :
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return "안녕하세요! " + username + "님." + " 좋은 하루되세요!";
}
console.log(greetUser("이형민"));

// 2. 원가 계산 :
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
function calculateOriginalPrice(priceWithTax) {
  return "￦" + priceWithTax / 1.033;
}
console.log(calculateOriginalPrice(10_000));

// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.

const registrationCard = {
  "이름(name)": "이형민",
  "나이(age)": 37,
  "성별(gender)": "남자",
};
const canSellAlcohol = (registrationCard) =>
  registrationCard["나이(age)"] >= 19;
console.log(canSellAlcohol(registrationCard));

// 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
const getDiscountedPrice = (originalPrice, discountPercent) =>
  "￦" + originalPrice * (1 - discountPercent);
console.log(getDiscountedPrice(10_000, 0.03));
// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
function getGradeAndDescription(score) {
  if (score >= 90) {
    return (
      "score: " +
      score +
      ", " +
      "grade: " +
      "A" +
      ", " +
      "descriotion: " +
      "매우 우수"
    );
  } else if (score >= 80) {
    return (
      "score: " +
      score +
      ", " +
      "grade: " +
      "B" +
      ", " +
      "descriotion: " +
      "우수"
    );
  } else if (score >= 70) {
    return (
      "score: " +
      score +
      ", " +
      "grade: " +
      "C" +
      ", " +
      "descriotion: " +
      "보통"
    );
  } else if (score >= 60) {
    return (
      "score: " +
      score +
      ", " +
      "grade: " +
      "D" +
      ", " +
      "descriotion: " +
      "미달, 통과 기준 근접"
    );
  } else if (score >= 50) {
    return (
      "score: " +
      score +
      ", " +
      "grade: " +
      "F" +
      ", " +
      "descriotion: " +
      "낙제"
    );
  }
}
console.log(getGradeAndDescription(76));
