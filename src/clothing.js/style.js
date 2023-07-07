

// ***********************************************************************
// run arrows
// ***********************************************************************
const productcontainers=document.querySelectorAll('.product-container')
const preptn=document.querySelectorAll('.pre-btn')
const nextptn=document.querySelectorAll('.next-btn')

productcontainers.forEach((item,i) => {
  let containerdimenstions = item.getBoundingClientRect();
  let containerwidth = containerdimenstions.width

  nextptn[i].addEventListener('click', () => {
    item.scrollLeft += containerwidth
    // item.scrollLeft += (containerwidth-'500')
  })

  preptn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth
    // item.scrollLeft -= (containerwidth-'500')
  })
});
