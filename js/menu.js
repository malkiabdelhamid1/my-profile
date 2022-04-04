//import start
const menubtn =  document.querySelector('#menubtn');
const mobile_menu = document.querySelector('#mobile-menu-container');
const layer = document.querySelector('#layer');

menubtn.addEventListener("click",()=>{
    mobile_menu.style.display="flex";
});
layer.addEventListener("click",()=>{
    mobile_menu.style.display="none";
})

////

