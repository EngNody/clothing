
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










