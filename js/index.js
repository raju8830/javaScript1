// // console.log('Hello World');
// // H4 Varialble taxe name  
// var name = "This is your Name ";
// document.getElementById('nameId').innerHTML = 'This is your Name';


// // Operators

// let text1 = "Drage ";
// let text2 = "And ";
// let text3 = "Drope";
// let teaxt4 = text1 + text2 + text3;
// document.getElementById('demo3').innerHTML = teaxt4;


// Drage And Drope Section 
const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
}

header.addEventListener("mousedown", ()=>{
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});


