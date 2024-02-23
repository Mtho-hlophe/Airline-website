const copyrightYear = document.getElementById('copyrightYear')
const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

var navTabs = document.querySelectorAll('.navTab')
var navContainer = document.querySelector('.div3')
var miniContainer = document.querySelector('.miniContainer')

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
function bookingInfo0( ) {
    
         return miniContainer.innerHTML = `<div class="childContainer">
                    <input id="input1" type="text" placeholder="Your location">
                    <h1>To:</h1>
                    <input id="input2" type="text" placeholder="Your destination">
                    <button id="searchBtn1" type="submit">Search</button>
                </div>`
}
function bookingInfo1( ) {
     
          return miniContainer.innerHTML = `<div class="checkIn">
                    <input id="input3" type="text" placeholder="Last Name">
                    <input id="input4" type="text" placeholder="Your booking reference">
                    <button id="manageBookingBtn" type="submit">Manage Booking</button>
                    <button id="manageBookingBtn" type="submit">Search</button>
                </div>`
}
function bookingInfo2( ) {
     
         return miniContainer.innerHTML = `<div class="checkIn">
                    <input id="input5" type="text" placeholder="Departure Airport">
                    <input id="input6" type="text" placeholder="Arrival Airport">                    
                    <button type="submit">Check Status</button>
                </div>`
}
function bookingInfo3( ) {
     
         return miniContainer.innerHTML = `<div class="checkIn">
                    <input id="input8" type="text" placeholder="Departure Airport">
                    <input id="input9" type="text" placeholder="Arrival Airport">
                    <input id="input10" type="select">
                    <button type="submit">Check status</button>
                </div>`
                
}
bookingInfo0( )

var travelContext = document.querySelector('.travelContext')

travelContext0()
function travelContext0() {
    
    return travelContext.innerHTML = `<div class="imagesContainer">
            <div class="imageCard">
                <a href="melbourne.html"><img src="images - 2024-02-02T183905.857.jpeg"></a>
                <p id="location">Australia</p>
                <h3>Melbourne</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <a href="philippines.html"><img src="images - 2024-02-02T183950.590.jpeg"></a>
                <p id="location">Indonesia</p>
                <h3>Phillines</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <a href="prague.html"><img src="images - 2024-02-02T183643.764.jpeg"></a>
                <p id="location">Czech</p>
                <h3>Prague</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <a href="melbourne.html"><img src="images - 2024-02-02T183833.194.jpeg"></a>
                <p id="location">Australia</p>
                <h3>Melbourne</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <a href="philippines.html"><img src="images - 2024-02-02T183756.117.jpeg"></a>
                <p id="location">Indonesia</p>
                <h3>Philippines</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <a href="prague.html"><img src="images - 2024-02-02T183917.196.jpeg"></a>
                <p id="location">Czech</p>
                <h3>Prague</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>`
}

function travelContext1() {
    
    return travelContext.innerHTML = `<div class="imagesContainer">
            <div class="imageCard">
                <a href="prague.html"><img src="images - 2024-02-02T183635.494.jpeg"></a>
                <p id="location">France</p>
                <h3>Temení</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183658.758.jpeg">
                <p id="location">Cvliú</p>
                <h3>Haiti</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183520.077.jpeg">
                <p id="location">Nigeria</p>
                <h3>Lagos</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <a href="melbourne.html"><img src="download (10).jpeg"></a>
                <p id="location">Tanzania</p>
                <h3>Zanzibar</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183802.174.jpeg">
                <p id="location">Niñu</p>
                <h3>Peru</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195505.355.jpeg">
                <p id="location">Belgium</p>
                <h3>Alps</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>`
}
function travelContext2() {
    
    return travelContext.innerHTML = `<div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T195108.933.jpeg">
                <p id="location">Germany</p>
                <h3>Frankfurtí</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195158.748.jpeg">
                <p id="location">Egypt</p>
                <h3>Cairo</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195012.521.jpeg">
                <p id="location">Nigeria</p>
                <h3>Lagos</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T195337.792.jpeg">
                <p id="location">Tanzania</p>
                <h3>Zanzibar</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195433.469.jpeg">
                <p id="location">Niñu</p>
                <h3>Peru</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195223.921.jpeg">
                <p id="location">Belgium</p>
                <h3>Alps</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>`
}

function travelContext3() {
    
    return travelContext.innerHTML = `<div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T183905.857.jpeg">
                <p id="location">Australia</p>
                <h3>Melbourne</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183950.590.jpeg">
                <p id="location">Indonesia</p>
                <h3>Phillines</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183643.764.jpeg">
                <p id="location">Czech</p>
                <h3>Prague</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T183833.194.jpeg">
                <p id="location">Australia</p>
                <h3>Melbourne</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183756.117.jpeg">
                <p id="location">Indonesia</p>
                <h3>Phillines</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183917.196.jpeg">
                <p id="location">Czech</p>
                <h3>Prague</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
    
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T183635.494.jpeg">
                <p id="location">France</p>
                <h3>Temení</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183658.758.jpeg">
                <p id="location">Cvliú</p>
                <h3>Haiti</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183520.077.jpeg">
                <p id="location">Nigeria</p>
                <h3>Lagos</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="download (10).jpeg">
                <p id="location">Tanzania</p>
                <h3>Zanzibar</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T183802.174.jpeg">
                <p id="location">Niñu</p>
                <h3>Peru</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195505.355.jpeg">
                <p id="location">Belgium</p>
                <h3>Alps</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>            
        </div>
        
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T195108.933.jpeg">
                <p id="location">Germany</p>
                <h3>Frankfurtí</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195158.748.jpeg">
                <p id="location">Egypt</p>
                <h3>Cairo</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195012.521.jpeg">
                <p id="location">Nigeria</p>
                <h3>Lagos</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>
        <div class="imagesContainer">
            <div class="imageCard">
                <img src="images - 2024-02-02T195337.792.jpeg">
                <p id="location">Tanzania</p>
                <h3>Zanzibar</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 11,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195433.469.jpeg">
                <p id="location">Niñu</p>
                <h3>Peru</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 15,499<sup>99</sup></h4>
            </div>
            <div class="imageCard">
                <img src="images - 2024-02-02T195223.921.jpeg">
                <p id="location">Belgium</p>
                <h3>Alps</h3>
                <p>Book economy from 3rd on march</p>
                <h4>from ZAR 17,499<sup>99</sup></h4>
            </div>
        </div>`
}

function handleChange(selectedOption) {
    
    if (selectedOption === 'johannesburg') {
        travelContext0()
        observer()
    }
    else if(selectedOption === 'southAfrica') {
        travelContext3()
        observer()
    }
    else if(selectedOption === 'nelspruit') {
        travelContext2()
        observer()
    }
    else if(selectedOption === 'capeTown') {
        travelContext1()
        observer()
    }
}
function observer() {

const imageCard = document.querySelectorAll('.imageCard')
const destinationObserver = new IntersectionObserver( entries => {
    
    entries.forEach( (entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting) {
            destinationObserver.unobserve(entry.target)
        }
    })
},{
    threshold: .3,
})

imageCard.forEach( (card) => {
    destinationObserver.observe(card)
})

}
observer()

let flightPaths = document.querySelector('#flightPaths')
let errorNotification = document.querySelector('#errorInfoDiv')
    errorNotification.style.fontSize = '.8rem'
    errorNotification.style.color = 'red'
    errorNotification.style.backgroundColor = 'azure'
    errorNotification.style.textAlign = 'center'

oneInputBoxes()
function oneInputBoxes() {

var inputBox1 = document.querySelector('#input1')
var inputBox2 = document.querySelector('#input2')
var searchBtn1 = document.querySelector('#searchBtn1')

errorNotification.innerHTML = ''
    
inputBox1.addEventListener('input', locationFunc)
inputBox2.addEventListener('input', destinationFunc)     
searchBtn1.addEventListener('click', displayFlights)

function locationFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv(e) {       
        let obj = JSON.parse(this.response)        
        let cityChecker = obj.locations.some((loc) => {
            return loc == inputBox1.value
        }) 
                                 
        if(cityChecker === true ) {
            if(inputBox1.value === inputBox2.value) {
               errorNotification.innerHTML = `You can't travel if the location is the same Bro, you are literally going nowhere!`
               inputBox1.value = ''
            }             
            else{
                inputBox1.style.border = "2px solid green"
                errorNotification.innerHTML = ''
            }
        }
        else{           
            errorNotification.innerHTML = `*please choose a POPULAR South African/ American city
                                          with an airport, we do not have an airplane in:
                                          <b>${inputBox1.value}<b>`
            inputBox1.style.border = "2px solid red"
        }
    }
}

function destinationFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)              
        let cityChecker = obj.locations.some((loc) => {
            return loc == inputBox2.value
        }) 
                                 
        if(cityChecker === true ) {
            if(inputBox1.value === inputBox2.value) {
               errorNotification.innerHTML = `You can't travel if the location is the same Bro, you are literally going nowhere!`
               inputBox2.value = ''
            }             
            else{
                inputBox2.style.border = "2px solid green"
                errorNotification.innerHTML = ''
            }            
        }
        else{
            errorNotification.innerHTML = `*please choose a POPULAR South African/American city
                                          with an airport, we do not have an airplane going to:
                                          <b>${inputBox2.value}<b>`                         
            inputBox2.style.border = "2px solid red"
        }
    }
}
function displayFlights() {
     
    if(inputBox1.value !== '' && inputBox2.value !== '' && errorNotification.innerHTML == '') {
                
        flightPaths.innerHTML = `<div id="flightInfoDiv">
                <img id="flightCloseMenu" src="exit-full-screen.png" alt="">
                <div id="awayFromCloseBtn">Flights from: <b>${inputBox1.value}</b>
                to <b>${inputBox2.value}</b></div>               
                <br>
                <div>
                    <img src="plane.png">
                    <h3>Flight Name: <i>B747qatar</i></h3>
                    <p>Duration: <h3>3h20m</h3></p>
                    <img src="time.png">
                    <p>Departure: 11:15am</p>
                    <button>Book</button>
                </div>
                <div>
                    <img src="plane.png">
                    <h3>Flight Name: <i>B247SAair</i></h3>
                    <p>Duration: <h3>4h05m</h3></p>
                    <img src="time.png">
                    <p>Departure: 21:35pm</p>
                    <button>Book</button>
                </div>
                <div>
                    <img src="plane.png">
                    <h3>Flight Name: <i>P5667Nigr</i></h3>
                    <p>Duration: <h3>3h50m</h3></p>
                    <img src="time.png">
                    <p>Departure: 13:19am</p>
                    <button>Book</button>
                </div>
            </div>`            
       flightPaths.style.display = 'block'
       
    }else {
        errorNotification.innerHTML = '*Please enter valid information before searching'
    }
    try{
        var closeFlightInfoBtn = document.querySelector('#flightCloseMenu')
        closeFlightInfoBtn.addEventListener('click', () => {
            flightPaths.style.display = 'none'
            flightPaths.innerHTML = ''           
        })
    }
    catch(error) {
        //console.error(`Just insert what's needed so we can move forward, that's what the website would really appreciate. `+ error)
    }    
    
}
    
}

function threeInputBoxes() {

errorNotification.innerHTML = ''
flightPaths.style.display = 'none'
flightPaths.innerHTML = ''

    var inputBox3 = document.querySelector('#input3')
    var inputBox4 = document.querySelector('#input4')
    var manageBookingBtn = document.querySelectorAll('#manageBookingBtn')
    
    inputBox3.addEventListener('change', nameBookingFunc)
    inputBox4.addEventListener('change', bookingCodeFunc)
    manageBookingBtn.forEach( (booking) => {
    
        booking.addEventListener('click', displayBooking)
    })

 function nameBookingFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)        
        let cityChecker = obj.names.some((loc) => {
            return loc == inputBox3.value
        }) 
                                 
        if(cityChecker === true ) {                                  
            inputBox3.style.border = "2px solid green" 
            errorNotification.innerHTML = ''     
        }
        else{           
            errorNotification.innerHTML = `Oops, please check if your name is spelled correctly!`
            inputBox3.style.border = "2px solid red"
        }
    }
}

 function bookingCodeFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)               
        let cityChecker = obj.bookingCode.some((loc) => {
            return loc == inputBox4.value
        }) 
                                 
        if(cityChecker === true ) {           
            inputBox4.style.border = "2px solid green"
            errorNotification.innerHTML = ''          
        }
        else{
            errorNotification.innerHTML = `*please provide a correct booking reference, we sent it your email
                                            address that you provided when booking!`                         
            inputBox4.style.border = "2px solid red"
        }
    }
}

function displayBooking() {
     
    if(inputBox3.value !== '' && inputBox4.value !== '' && errorNotification.innerHTML == '') {
                
        flightPaths.innerHTML = `<div id="flightInfoDiv">
                <img id="flightCloseMenu" src="exit-full-screen.png" alt="">
                <div id="awayFromCloseBtn">Booking info for: <b>${inputBox3.value}</b>
                Booking code: <b>${inputBox4.value}</b></div>               
                <br>
                <div>
                    <img src="ticket-flight.png">
                    <h3>Flight Name: <i>B747qatar</i></h3>
                    <p>Duration: <h3>7h20m</h3></p>
                    <p>Departure: 09:15am</p>
                    <button id="flightCancel">Cancel Flight</button>
                </div>
                <div id="flightCancelInfo">  
                </div>            
            </div>`            
       flightPaths.style.display = 'block'
       
    }
    else {
        errorNotification.innerHTML = '*Please enter valid information before searching'
    }
    try{
    var flightCancel = document.querySelector('#flightCancel')
    var flightCancelInfo = document.querySelector('#flightCancelInfo')
    var closeFlightInfoBtn = document.querySelector('#flightCloseMenu')
    let date = new Date()
    let time = date.getHours() +':'+date.getMinutes()
    
    flightCancel.addEventListener('click', () => {
        flightCancelInfo.style.color = 'red'
        flightCancelInfo.style.fontSize = '.9rem'        
        flightCancelInfo.innerText = `This flight has been cancelled by ${inputBox3.value}(you) at ${time}`
    })
    closeFlightInfoBtn.addEventListener('click', () => {
        flightPaths.style.display = 'none'
        flightPaths.innerHTML = ''           
    })
    }
    catch (error) {
        //console.error(`Just insert what's needed so we can move forward, that's what the website would really appreciate. `+ error)
    }
}
}

function sixInputBoxes() {

errorNotification.innerHTML = ''
flightPaths.style.display = 'none'
flightPaths.innerHTML = ''

    var inputBox5 = document.querySelector('#input5')
    var inputBox6 = document.querySelector('#input6')    

    inputBox5.addEventListener('change', departureFunc)
    inputBox6.addEventListener('change', arrivalFunc)    

 function departureFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)
        
        let regularExp = new RegExp(inputBox5.value)                          
        if(regularExp.test(obj.locations) === true
           || regularExp.test(obj.destination) === true 
          ) 
        {
                                  
        inputBox5.style.border = "2px solid green" 
        errorNotification.innerHTML = ''     
        }
        else{           
            errorNotification.innerHTML = `Oops, please ennter a Popular US/south African city`
            inputBox5.style.border = "2px solid red"
        }
    }
}

 function arrivalFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)       
        
        let regularExp = new RegExp(inputBox6.value)                  
        if(regularExp.test(obj.destination) === true
           || regularExp.test(obj.locations) === true
           ) 
        {
           
            inputBox6.style.border = "2px solid green"
            errorNotification.innerHTML = ''          
        }
        else{
            errorNotification.innerHTML = `*Oops, please ennter a Popular US/south African city`                         
            inputBox6.style.border = "2px solid red"
        }
    }
}    
}

function nineInputBoxes() {

errorNotification.innerHTML = ''
flightPaths.style.display = 'none'
flightPaths.innerHTML = ''

    var inputBox8 = document.querySelector('#input8')
    var inputBox9 = document.querySelector('#input9')
    var inputBox10 = document.querySelector('#input10')

    inputBox8.addEventListener('change', departureFunc)
    inputBox9.addEventListener('change', arrivalFunc)
    inputBox10.addEventListener('change', departingLocation)

 function departureFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)
        
        let regularExp = new RegExp(inputBox8.value)                          
        if(regularExp.test(obj.locations) === true
           || regularExp.test(obj.destination) === true 
          ) 
        {
                                  
        inputBox8.style.border = "2px solid green" 
        errorNotification.innerHTML = ''     
        }
        else{           
            errorNotification.innerHTML = `Oops, please ennter a Popular US/south African city`
            inputBox8.style.border = "2px solid red"
        }
    }
}

 function arrivalFunc() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)       
        
        let regularExp = new RegExp(inputBox9.value)                  
        if(regularExp.test(obj.destination) === true
           || regularExp.test(obj.locations) === true
           ) 
        {
           
            inputBox9.style.border = "2px solid green"
            errorNotification.innerHTML = ''          
        }
        else{
            errorNotification.innerHTML = `*Oops, please ennter a Popular US/south African city`                         
            inputBox9.style.border = "2px solid red"
        }
    }
}

 function departingLocation() {
    let object = new XMLHttpRequest()
        object.onload = jsonConv
        object.open('get', 'airline.json', true)
        object.send()
        
    function jsonConv() {       
        let obj = JSON.parse(this.response)       
        
        let regularExp = new RegExp(inputBox10.value)                  
        if(regularExp.test(obj.bookingCode) === true) {
           
            inputBox10.style.border = "2px solid green"
            errorNotification.innerHTML = ''          
        }
        else{
            errorNotification.innerHTML = `*Please enter the correct city`                         
            inputBox10.style.border = "2px solid red"
        }
    }
}    
}

window.addEventListener('load', () => {
    var loader = document.querySelector('#pageLoader')
        loader.style.display = 'none'
}) 



