// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO: 입력값을 가져와서 새 TIL 항목을 만들어 목록에 추가하세요
  const dateInput = document.querySelector("#til-date");
  const titleInput = document.querySelector("#til-title");
  const contentInput = document.querySelector("#til-content");

  const date = dateInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  
  const tilItem = createTilEntry(date, title, content);
  tilList.appendChild(tilItem);

  // 폼 초기화
  tilForm.reset();
});

// 트랙리스트 토글
const trackListToggle = document.getElementById("dsotm-track-toggle-btn");
trackListToggle.addEventListener("click", function () {
  const trackList = document.getElementById("dsotm-track-list");
  if (trackList.style.display === "none") {
    trackList.style.display = "block";
  } else {
    trackList.style.display = "none";
  }
});


const createTilEntry = (date, title, content) => {
  const tilItem = document.createElement("article");
  tilItem.classList.add("til-item");

  const tilDate = document.createElement("time");
  tilDate.textContent = date;
  tilItem.appendChild(tilDate);

  const tilTitle = document.createElement("h3");
  tilTitle.textContent = title;
  tilItem.appendChild(tilTitle);

  const tilContent = document.createElement("p");
  tilContent.textContent = content;
  tilItem.appendChild(tilContent);

  return tilItem;
};