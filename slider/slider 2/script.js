let next = document.getElementById("next")
let prev = document.getElementById("prev")
let slider = document.getElementById("slider")

next.addEventListener("click", ()=>{
    let slides = document.querySelectorAll("#slides")
    slider.appendChild(slides[0])
})
prev.addEventListener("click", ()=>{
    let slides = document.querySelectorAll("#slides")
    slider.prepend(slides[slides.length - 1])
})