var menu = document.querySelector('#menu')
var closeMenuBtn = document.querySelector('#closeMenuBt')
var menuIcon = document.querySelector('#menuIcon')

 menuIcon.addEventListener('click', showMenu)
 closeMenuBtn.addEventListener('click', showMenu) 

function showMenu() {
    if( menu.style ) {
        if(menu.style.display == 'none' || menu.style.display == '') {
            menu.style.display = 'block'
        }
        else {
            menu.style.display = 'none'
        }
    }
}
var div1 = document.querySelector('section .div1')
    div1.style.backgroundImage = 'url("images - 2024-02-02T183905.857.jpeg")'

var image1 = document.querySelector('#img1')
    image1.style.backgroundImage = 'url("images - 2024-02-02T183833.194.jpeg")'
    
var image2 = document.querySelector('#img2')
    image2.style.backgroundImage = 'url("images - 2024-02-02T195306.521.jpeg")'
    
var image3 = document.querySelector('#img3')
    image3.style.backgroundImage = 'url("images - 2024-02-02T195337.792.jpeg")'
    
var image4 = document.querySelector('#img4')
    image4.style.backgroundImage = 'url("images - 2024-02-02T183905.857.jpeg")'
    
var image5 = document.querySelector('#img5')
    image5.style.backgroundImage = 'url("images - 2024-02-02T195108.933.jpeg")'
     
let form = document.querySelector('#form')
let closeFormImg = document.querySelector('form img')
let bookBtn = document.querySelector('.div1 button')

closeFormImg.addEventListener('click', showForm)
bookBtn.addEventListener('click', showForm)         
 
function showForm() {
         
    if(form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'block'
        bookBtn.innerText = 'Close form'
    }
    else {
        form.style.display = 'none'
        bookBtn.innerText = 'Book now'
    }
}
   
window.addEventListener('load', () => {
    var loader = document.querySelector('#pageLoader')
        loader.style.display = 'none'
}) 
