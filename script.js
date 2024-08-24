let debounceTimer;

function removeBlur() {
  const blurredElements = document.querySelectorAll(".blur");
  blurredElements.forEach((element) => {
    element.classList.remove("blur");
  });
  console.info(
    `${blurredElements.length}개의 블러된 컨텐츠를 정상화하였습니다!`
  );
}

document.addEventListener("DOMContentLoaded", () => {
  console.info("BanBlur가 활성화되었습니다!");

  removeBlur();

  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(removeBlur, 3_000);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
