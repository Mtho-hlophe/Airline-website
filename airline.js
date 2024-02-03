const copyrightYear = document.getElementById('copyrightYear')
const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

var navTabs = document.querySelectorAll('.navTab')
var navContainer = document.querySelector('.div3')
var miniContainer = document.querySelector('.miniContainer')
   
function bookingInfo0( ) {
    
         return miniContainer.innerHTML = `<div class="childContainer">
                    <input type="text" placeholder="Your location">
                    <h1>To:</h1>
                    <input type="text" placeholder="Your destination">
                    <button type="submit">Search</button>
                </div>`
}
function bookingInfo1( ) {
     
          return miniContainer.innerHTML = `<div class="checkIn">
                    <input type="text" placeholder="Last Name">
                    <input type="text" placeholder="Your booking reference">
                    <button type="submit">Manage Booking</button>
                    <button type="submit">Search</button>
                </div>`
}
function bookingInfo2( ) {
     
         return miniContainer.innerHTML = `<div class="checkIn">
                    <input type="text" placeholder="Departure Airport">
                    <input type="text" placeholder="Arrival Airport">
                    <input type="text" value="Departing" disabled>
                    <button type="submit">Check Status</button>
                </div>`
}
function bookingInfo3( ) {
     
         return miniContainer.innerHTML = `<div class="checkIn">
                    <input type="text" placeholder="Departure Airport">
                    <input type="text" placeholder="Arrival Airport">
                    <input type="select">
                    <button type="submit">Check status</button>
                </div>`
                
}
bookingInfo0( )

var travelContext = document.querySelector('.travelContext')

travelContext0()
function travelContext0() {
    
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
        </div>`
}

function travelContext1() {
    
    return travelContext.innerHTML = `<div class="imagesContainer">
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

                  
