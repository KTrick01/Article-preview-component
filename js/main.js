const shareBtn = document.querySelector(".ShareBtn")
const shareBtnContainer = document.querySelector(".ShareBtnContainer")
const container = document.querySelector(".socialContainer")
const main = document.querySelector(".articleComponent")

shareBtn.addEventListener('click', function() {

  container.classList.toggle("none")
  shareBtnContainer.classList.toggle("active--statusCon")
  shareBtn.classList.toggle("active--statusBtn")

  if (!container.classList.contains("none")) {
    main.style.margin = "8rem"
        
  } else {
    main.style.margin = "2rem"
  }
   
  
})



