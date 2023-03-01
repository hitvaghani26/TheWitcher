let x = document.getElementsByClassName("sub-menu");
const sliderline = document.querySelector(".image-comparison  .silder-line")
const slidericon = document.querySelector(".image-comparison .silder-icon") 


function myfun(){
    console.log("click");
    document.getElementById("myid").classList.toggle("myclass");
    document.getElementById("dropdown_img").classList.toggle("rotate");
    // document.getElementById("myid").style.display = "block";  
}   

const slider = document.querySelector(".image-comparison .slider");
const beforeimg = document.querySelector(".image-comparison .before-img");

slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";
    beforeimg.style.width = sliderValue;
    sliderline.style.left = sliderValue;
    slidericon.style.left = sliderValue;
})