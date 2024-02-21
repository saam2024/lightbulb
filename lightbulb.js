let lightbulb = document.querySelector("#light")
let onBtn = document.querySelector("#onBtn")
let offBtn = document.querySelector("#offBtn")

onBtn.addEventListener("click", function(){
    lightbulb.style.color = "white"
})
offBtn.addEventListener("click", function(){
    lightbulb.style.color = "gray"
})