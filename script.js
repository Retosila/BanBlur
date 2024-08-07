document.addEventListener('DOMContentLoaded', function() {
  console.log("BanBlur Activated!")

  // Remove blur from comments
  const pres = document.querySelectorAll('pre.blur');
  pres.forEach(pre => {
    pre.classList.remove('blur');
  });
  console.log(`Unblurred Comments: ${pres.length}`)

  // Remove blur from emoticons
  const imgs = document.querySelectorAll('img.blur');
  imgs.forEach(img => {
    img.classList.remove('blur');
  });
  console.log(`Unblurred Emoticons: ${imgs.length}`)

  // Remove blur from video emoticons
  const videos = document.querySelectorAll('video.blur');
  videos.forEach(video => {
    video.classList.remove('blur');
  });
  console.log(`Unblurred Video Emoticons: ${videos.length}`)
});
  