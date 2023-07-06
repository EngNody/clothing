
// *********************************************************
// make header
// *********************************************************
const navbar= () => {
  let nav = document.querySelector('.navbar')

nav.innerHTML=`
<div class="nav">
<div class="allbrand-logo">
      <img src="images/logo5-removebg-preview.png" class="brand-logo" alt="">
      <img src="images/logo10-removebg-preview.png" class="brand-logo" alt="">  
</div>
<div class="nav-items">
  <div class="search">
    <input type="text" class="search-box" placeholder="search prand , product">
  <button class="search-btn">Search</button>
  </div>
  <a href="#"><img src="images/user.jpg" alt=""></a>
  <a href="#"><img src="images/cart-removebg-preview.png" alt=""></a>
</div>
<div class="nav-mobile">
<span class="line line1"></span>
<span class="line line2"></span>
<span class="line line3"></span>
</div>
  </div>

<ul class="links-container">
  <li class="link-item"><a href="#" class="link">Home</a></li>
  <li class="link-item"><a href="#" class="link">Women</a></li>
  <li class="link-item"><a href="#" class="link">men</a></li>
  <li class="link-item"><a href="#" class="link">kids</a></li>
  <li class="link-item"><a href="#" class="link">accessories</a></li>
</ul>
`
}

navbar();

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

// ***************************************************************
// make footer
// ***************************************************************

const footer = () => {
  
let footer=document.querySelector('footer')

footer.innerHTML=`

<div class="footer-container">
<div class="logocircle">
    <img src="images/logo5.jpg" class="logo" alt="">
</div> 
 <div class="footer-ul-container">
<ul class="category">
  <li class="category-title">men</li>
  <li><a href="" class="footer-link">t-shirts</a></li>
  <li><a href="" class="footer-link">sweatshirts</a></li>
  <li><a href="" class="footer-link">shirts</a></li>
  <li><a href="" class="footer-link">jeans</a></li>
  <li><a href="" class="footer-link">trousers</a></li>
  <li><a href="" class="footer-link">shoes</a></li>
  <li><a href="" class="footer-link">casuals</a></li>
  <li><a href="" class="footer-link">formals</a></li>
  <li><a href="" class="footer-link">sports</a></li>
  <li><a href="" class="footer-link">watch</a></li>
</ul>

<ul class="category">
  <li class="category-title">women</li>
  <li><a href="" class="footer-link">t-shirts</a></li>
  <li><a href="" class="footer-link">sweatshirts</a></li>
  <li><a href="" class="footer-link">shirts</a></li>
  <li><a href="" class="footer-link">jeans</a></li>
  <li><a href="" class="footer-link">trousers</a></li>
  <li><a href="" class="footer-link">shoes</a></li>
  <li><a href="" class="footer-link">casuals</a></li>
  <li><a href="" class="footer-link">formals</a></li>
  <li><a href="" class="footer-link">sports</a></li>
  <li><a href="" class="footer-link">watch</a></li>
</ul>
  </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sint? Soluta nobis omnis officia repellendus porro necessitatibus, doloribus fugit voluptate cupiditate explicabo. Et praesentium molestias, culpa sit illo aspernatur sint?</p>
<p class="info">support emails - help@clothing.com, 
  customersupport@clothing.com</p>
<p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
<div class="footer-social-container">
  <div>
    <a href="#" class="social-link">terms & services</a>
    <a href="#" class="social-link">privacy page</a>
  </div>
  <div>
    <a href="#" class="social-link">instagram</a>
    <a href="#" class="social-link">facebook</a>
    <a href="#" class="social-link">twitter</a>
  </div>
</div>
<p class="footer-credit">Clothing, Best apperals online store</p>

`

}

footer()





