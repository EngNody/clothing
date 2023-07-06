
// *********************************
// toggle images
// *********************************
const productimages = document.querySelectorAll(".product-images img");
const productimageslide = document.querySelector(".image-slider");

let activeimageslider = 0;

productimages.forEach((item,i) => {
  item.addEventListener('click',() => {
    productimages[activeimageslider].classList.remove('active');
    item.classList.add('active');
    productimageslide.style.backgroundImage = `url('${item.src}')`;
    activeimageslider = i;
  
  
  })
});
// ************************
// toggle size buttons
// ************************
const sizebtns = document.querySelectorAll(".size-radio-btn");

let checkedbtn = 0;

sizebtns.forEach((item,i) => {
  item.addEventListener('click',() => {
    sizebtns[checkedbtn].classList.remove('check');
    item.classList.add('check');
    checkedbtn = i;
  
  
  })
});















