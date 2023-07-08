
// select inputs
const submitbtn = document.querySelector(".submit-btn")
const name = document.querySelector("#name")
console.log(name)
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const number = document.querySelector("#number")
const tac=document.querySelector("#terms-and-cond")
const notification=document.querySelector("#notification")

submitbtn.addEventListener("click", () => {
if(name.value.length < 3) {
  showAlert("name must be 3 letters long")
}
})





































