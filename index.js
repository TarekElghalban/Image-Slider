
let images = Array.from(document.querySelectorAll(".item img")) 
let lightBoxContainer = document.querySelector(".lightBoxContainer")
let lightBoxItem = document.querySelector(".lightBoxItem")
let closeBtn = document.querySelector("#close")
let nextBtn = document.querySelector("#next")
let prevBtn = document.querySelector("#prev")
let currentIndex=0


for(let i=0 ; i<images.length ; i++){
    images[i].addEventListener("click",function(e){
        openSlider(e)
    })
}
function openSlider(e){
   currentIndex = images.indexOf(e.target);
let currentSrc = e.target.src
    lightBoxContainer.style.display="flex"
    lightBoxItem.style.backgroundImage = `url(${currentSrc})`
}

closeBtn.addEventListener("click",function(){
    closeSlider()
})

function closeSlider(){
    lightBoxContainer.style.display="none"

}





nextBtn.addEventListener("click",function(){
    currentIndex++
    if(currentIndex == images.length){
            currentIndex=0
         }
    let currentSrc = images[currentIndex].src 
    lightBoxItem.style.backgroundImage = `url(${currentSrc})`

})








prevBtn.addEventListener("click",function(){
    prev()
})

function prev() {
currentIndex--
if(currentIndex < 0){
    currentIndex=images.length-1
}
let currentSrc = images[currentIndex].src
lightBoxItem.style.backgroundImage  = `url(${currentSrc})`

}











