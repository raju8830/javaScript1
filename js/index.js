

// Drage And Drope Section 
let wrapper = document.querySelector(".box-content"),
header = wrapper.querySelector(".header");

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




//Second post
let wrapper1 = document.querySelector(".box-content1"),
    header1 = wrapper1.querySelector(".header1");

function onDrag1({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper1);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper1.style.left = `${leftVal + movementX}px`;
    wrapper1.style.top = `${topVal + movementY}px`;
}

header1.addEventListener("mousedown", ()=>{
    header1.classList.add("active");
    header1.addEventListener("mousemove", onDrag1);
});

document.addEventListener("mouseup", ()=>{
    header1.classList.remove("active");
    header1.removeEventListener("mousemove", onDrag1);
});



















// Minimize mart

// First Minimize
function firstClick(){
    let togglemenu = document.getElementById("firstClick");
    if(togglemenu.style.display === "none"){
        togglemenu.style.display = "block";
    }else {
        togglemenu.style.display = "none";
    }
    let show = document.querySelector('.main-menu');
    show.classList.toggle("show");
    windowre1.classList.toggle("resizewin");
}
//window resize
const windowre1 = document.querySelector('#fullscreen1');
const contentbox = document.querySelector('.box-content1');
windowre1.addEventListener('click',(e)=>{
    contentbox.style.width = "100%";
    contentbox.style.top = 0;
    contentbox.style.height = "100%";
    contentbox.style.left = 0;
    contentbox.style.transform = 'none';
})
// Second Minimize
function firstClick1(){
    let togglemenu = document.getElementById("firstClick1");
    if(togglemenu.style.display === "none"){
        togglemenu.style.display = "block";
    }else {
        togglemenu.style.display = "none";
    }
    let show = document.querySelector('.border2');
    show.classList.toggle("show");
}
//window resize
const windowre2 = document.querySelector('#fullscreen');
const contentbox2 = document.querySelector('.box-content');
windowre2.addEventListener('click',(e)=>{
    contentbox2.style.width = "100%";
    contentbox2.style.top = 0;
    contentbox2.style.height = "100%";
    contentbox2.style.left = 0;
    contentbox2.style.transform = 'none';
})










