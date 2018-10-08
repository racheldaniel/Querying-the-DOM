let firstHeader = document.querySelector(".article__header")
firstHeader.textContent = "Welcome to the {insert your name here} blog"

let allHeaders = document.querySelectorAll(".article__header")

for (let i = 0; i < allHeaders.length; i++){
  allHeaders[i].classList.add("important"); 
}

let dashed = document.querySelector