const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

//getting each image (img tag) under #imgs id as below

const img = document.querySelectorAll("#imgs img");
// output will be nodeList
console.log(img);

// setting up the index with zero
let index = 0;
//run for every 2 seconds by calling function named run(), 2000ms=2s: so used set Interval
let interval = setInterval(run, 2000);

function run() {
  //Step 1: should increment the index by 1
  index++;
  //Step 2: then change the image
  changeImage();
}
// AUTOMATICALLY CHANGE THE IMAGE
function changeImage() {
  // checking for the beginning or the end of image to reset for either 'zero' or the 'last index'
  /*
OUTPUT OF img==>NodeList(6) [img, img, img, img, img, img]
        0: img
        1: img
        2: img
        3: img
        4: img
        5: img
        length: 6
        [[Prototype]]: NodeList
  */
  //img.length-1 =>6-1=5
  if (index > img.length - 1) {
    // checking above if : if its for end -->index > img.length - 1
    //then set below index to zero i.e the beginning
    index = 0;
  } else if (index < 0) {
    // checking above else if : if its for beginning -->index<0
    //then setting index as below:
    index = img.length - 1;
  }
  imgs.style.transform = `translateX(${-index * 500}px)`;
}

//MANUALLY CHANGE THE IMAGE step 2
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
//MANUALLY CHANGE THE IMAGE step 1

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
//MANUALLY CHANGE THE IMAGE step 3

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
