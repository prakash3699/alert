


let rowDiv=document.querySelector(".row");
let btns = document.querySelector(".btn");
btns.addEventListener('click', function (event) {
    console.log('a');
    let targetElement = event.target; //
    let parentDiv = targetElement.parentNode;
    parentDiv.classList.toggle("show");
});