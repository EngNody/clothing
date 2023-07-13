
const loader=document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn')
const myname = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const number = document.querySelector('#number')
const tac = document.querySelector('#terms-and-cond')
const notification = document.querySelector('#notification')


// send data 
// new
// ******************************************
// const sendData = (path, data) => {
  const sendData = (path, data) => {
    console.log(data)
    console.log(path)
    fetch(path, {
      method: 'post',
      // method: 'GET',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
      }).then((res) => res.json())
      .then(response => {
        console.log(response);
      processData(response);
      // processData(res.json)
      })
}

const processData = (data) => {
  // loader.style.display = null;
  loader.style.display = none;

if(data.alert){
  showAlert(data.alert)
} else if(data.myname){
  console.log(data)
}

}
// ******************************************************



submitBtn.addEventListener('click', () => {
if(myname.value.length < 3) {
  showAlert('name must be 3 letters long')
}else if(!email.value.length){
  showAlert('enter your email !!!')
}else if(password.value.length < 8){
  showAlert('password should be 8 letters long')
}else if(!number.value.length){
  showAlert('enter your phone number')
}else if(!Number(number.value) || number.value.length < 10){
  showAlert('invalid number, please enter valid one')
}else if(!tac.checked){
  showAlert('you must agree to our terms and conditions')
}else{

// submit form 
loader.style.display = 'block';

sendData('/signup',{
  name:myname.value,
  email:email.value,
  password:password.value,
  number: number.value,
  tac: tac.checked,
  notification:notification.checked,
  seller:false,
})
}
})

// alert function
const showAlert = (msg) => {
  const alertbox = document.querySelector('.alert-box')
  const alertmsg = document.querySelector('.alert-msg')

  alertmsg.innerHTML= msg;
  alertbox.classList.add('show');

  setTimeout(() => {
    alertbox.classList.remove('show');
  }, 3000);
}








console.log('fooooooooorm')























