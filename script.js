document.addEventListener('DOMContentLoaded', function() {
  console.log("BanBlur Activated!")
  const spans = document.querySelectorAll('pre.blur');
  spans.forEach(span => {
    span.classList.remove('blur');
  });
  console.log(`Unblurred Comments: ${spans.length}`)
  });
  