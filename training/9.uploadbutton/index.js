var uploadButton = document.querySelector('.upload-button')
var progressBar = document.querySelector('.upload-button .progress-bar')

let width = uploadButton.getBoundingClientRect().width
let uploadTime = 3000

uploadButton.addEventListener('click', () => {
  uploadButton.classList.remove('uploaded')
  uploadButton.classList.add('uploading')

  setTimeout(() => {
    uploadButton.classList.replace('uploading', 'uploaded')
  }, uploadTime)

  let start = null
  function grow(timestamp) {
    start ||= timestamp

    let progress = timestamp - start

    progressBar.style.width = `${Math.min(
      width * (progress / uploadTime),
      width
    )}px`

    if (progress < uploadTime) {
      window.requestAnimationFrame(grow)
    }
  }

  window.requestAnimationFrame(grow)
})
