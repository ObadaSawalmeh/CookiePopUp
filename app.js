// buttons
const exit_btn = document.querySelector('.icon-tabler-x')
const okay_btn = document.querySelector('.okay')
const cookie_popup = document.querySelector('.cookie-popup')
// close functionality
function closePopUp(){
    cookie_popup.style.display = 'none'
}

exit_btn.addEventListener('click',()=>{
    closePopUp()
});

okay_btn.addEventListener('click',()=>{
    closePopUp()
});

