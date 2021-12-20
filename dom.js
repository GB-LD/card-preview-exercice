const button = document.querySelector(".card_content_share_button");
const shareSection = document.querySelector('ul');
const shareList = shareSection.querySelectorAll("li");

button.addEventListener("click", (e)=> {shareSection.classList.toggle("active")});
console.log(shareList);
shareList.forEach(item => item.addEventListener("click", (e)=>shareSection.classList.remove("active") ))


