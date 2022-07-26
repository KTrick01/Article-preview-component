const shareBtn = document.querySelectorAll(".ShareBtn")
const shareBtnContainer = document.querySelectorAll(".ShareBtnContainer")
const container = document.querySelector(".socialContainer")
const main = document.querySelector(".articleComponent")

for (let i = 0; i < shareBtn.length; i++) {
    
    shareBtn[i].addEventListener('click', function() {
        
        container.classList.toggle("none")
        shareBtnContainer[i].classList.toggle("active--statusCon")
        shareBtn[i].classList.toggle("active--statusBtn")
         
        
      })
}





