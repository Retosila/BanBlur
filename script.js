console.info("Ban Blur가 활성화되었습니다!");

let debounceTimer;
document.addEventListener("DOMContentLoaded", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const blurredElements = document.querySelectorAll(".blur");
    blurredElements.forEach((element) => {
      element.classList.remove("blur");
    });
    console.info(
      `${blurredElements.length}개의 블러된 컨텐츠를 정상화하였습니다!`
    );
  }, 1_000);
});
