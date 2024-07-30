// async await 를 사용한 코드로 변경해보기
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를,
  // 아닐 경우 실패로 처리를 하게 해주세요
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (url === API_URL) {
        resolve("성공");
      } else {
        reject("실패");
      }
    }, 3000);
  });
}

async function urlData(url) {
  try {
    const result = await getData(url);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
urlData(API_URL);
urlData(WRONG_URL);
